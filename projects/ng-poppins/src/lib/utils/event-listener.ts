/**
 *
 * @param htmlElement eventlistener , shoule be a html element
 * @param eventName
 * @param func
 */
export function _addEventListener(
  htmlElement,
  eventName: string,
  funcRef,
  useCapture = false
) {
  if (window.addEventListener) {
    (htmlElement as any).addEventListener(eventName, funcRef, useCapture);
  } else if ((window as any).attachEvent) {
    (htmlElement as any).attachEvent("on" + eventName, funcRef);
  }
}

/**
 *
 * @param htmlElement eventlistener , shoule be a html element
 * @param eventName
 * @param func
 */
export function _removeEventListener(htmlElement, eventName: string, funcRef) {
  if (funcRef) {
    if (window.removeEventListener) {
      (htmlElement as any).removeEventListener(eventName, funcRef);
    } else if ((window as any).detachEvent) {
      (htmlElement as any).detachEvent("on" + eventName, funcRef);
    }
  }
}
