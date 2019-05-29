export function leftPad(originValue, size: number, padChar: string): string {
  let result = "";
  if (typeof originValue == "string") {
    if (originValue.length < size && size - originValue.length > 0) {
      for (let i = 0; i < size - originValue.length; i++) {
        result += padChar + originValue;
      }
    } else {
      result += originValue;
    }
  } else if (typeof originValue == "number") {
    if (
      originValue < Math.pow(10, size) &&
      size - (originValue as any).toString().length > 0
    ) {
      for (let i = 0; i < size - (originValue as any).toString().length; i++) {
        result += padChar + originValue;
      }
    } else {
      result += originValue;
    }
  }
  return result;
}