export function deepCopy(obj) {
  if (obj instanceof Object || obj instanceof Array) {
    return JSON.parse(JSON.stringify(obj));
  } else {
    return obj;
  }
}