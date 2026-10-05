import type { ReactNode } from "react";

export const inputClasses =
  "w-full rounded-lg border border-borderGray bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-mutedGray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primaryTint aria-[invalid=true]:border-priorityHigh";

export type FieldControlProps = {
  id: string;
  "aria-invalid": boolean;
  "aria-describedby"?: string;
  className: string;
};

type DemoFormFieldProps = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: (controlProps: FieldControlProps) => ReactNode;
};

// Label + control + inline error, with the error linked via aria-describedby.
export const DemoFormField = ({ id, label, optional, error, children }: DemoFormFieldProps) => {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {optional && <span className="font-normal text-mutedGray"> (optional)</span>}
      </label>
      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        className: inputClasses,
      })}
      {error && (
        <p id={errorId} className="text-[13px] text-priorityHigh">
          {error}
        </p>
      )}
    </div>
  );
};
