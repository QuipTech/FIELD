// Catches requests like "generate an image of...", "draw me a logo", "can you make a picture".
// Kept narrow (an action verb followed closely by a media noun, with no "from/with/using..." in between)
// so normal FIELD questions like "create a work order from a photo" pass through.
const IMAGE_REQUEST =
  /\b(generate|create|draw|make|design|render|produce|paint|sketch|illustrate|show me)\b(?:(?!\b(?:from|with|using|via|by|in|on|into|attach\w*|upload\w*)\b)[^.?!\n]){0,40}\b(images?|pictures?|pics?|photos?|drawings?|illustrations?|logos?|artwork|art|wallpapers?|icons?|graphics?)\b/i;

export const isImageRequest = (text: string) => IMAGE_REQUEST.test(text);
