import { base64Image } from '../../settings';
export const convertByte64ToImage = byte => {
  return `${base64Image}, {${byte}}`;
};
