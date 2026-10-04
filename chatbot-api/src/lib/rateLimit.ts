import { createHmac } from "node:crypto";
import {
  ConditionalCheckFailedException,
  DynamoDBClient,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { config } from "./config";

const dynamo = new DynamoDBClient({});

// Counters expire via DynamoDB TTL two days after they're first written.
const COUNTER_TTL_SECONDS = 2 * 24 * 60 * 60;

const incrementIfBelow = async (pk: string, limit: number): Promise<boolean> => {
  try {
    await dynamo.send(
      new UpdateItemCommand({
        TableName: config.tableName,
        Key: { pk: { S: pk } },
        UpdateExpression: "ADD #count :one SET expiresAt = if_not_exists(expiresAt, :expiresAt)",
        ConditionExpression: "attribute_not_exists(#count) OR #count < :limit",
        ExpressionAttributeNames: { "#count": "count" },
        ExpressionAttributeValues: {
          ":one": { N: "1" },
          ":limit": { N: String(limit) },
          ":expiresAt": { N: String(Math.floor(Date.now() / 1000) + COUNTER_TTL_SECONDS) },
        },
      }),
    );
    return true;
  } catch (error) {
    if (error instanceof ConditionalCheckFailedException) return false;
    throw error;
  }
};

// Counts one request against the caller's daily quota and the global daily quota (UTC days).
// IPs are stored as keyed hashes, never in plain text.
export const consumeQuota = async (ip: string): Promise<boolean> => {
  const day = new Date().toISOString().slice(0, 10);
  const ipHash = createHmac("sha256", config.turnstileSecretKey).update(`ip:${ip}`).digest("hex").slice(0, 32);

  if (!(await incrementIfBelow(`ip#${ipHash}#${day}`, config.dailyLimitPerIp))) return false;
  return incrementIfBelow(`global#${day}`, config.globalDailyLimit);
};
