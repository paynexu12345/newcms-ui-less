function getWinW(){
  return window.innerWidth;
}
export function checkIsIpadSize() {
  let w = getWinW();
  return w < 1200 && w > 700 ? true : false;
}
export function checkIsPcSize(){
  let w = getWinW();
  return w >= 1200 ? true : false;
}
export function checkIsPhoneSize() {
  let w = getWinW();
  return w < 700 ? true : false;
}
export function checkIsTouchScreenDevice() {
  let userAgent = navigator.userAgent.toLowerCase();
  let isIpad = userAgent.indexOf("ipad") > 0;
  let isIphoneOs = userAgent.indexOf("iphone os") > 0;
  let isMidp = userAgent.indexOf("midp") > 0;
  let isAndroid = userAgent.indexOf("android") > 0;
  let isCE = userAgent.indexOf("windows ce") > 0;
  let isWM = userAgent.indexOf("windows mobile") > 0;
  if (isIpad || isIphoneOs || isMidp || isAndroid || isCE || isWM) {
    return true;
  } else {
    return false;
  }
}