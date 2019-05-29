import {
  trigger,
  transition,
  animate,
  style,
  keyframes,
} from "@angular/animations";
import { DEFAULT_TIMING } from "./class";
/**
 * How to use?
 * 
 * import {fadeInOutFactory} from "ngx-cms-common"
 * let fadeInOut = fadeInOutFactory("fadeInOut",".3s ease-in-out")
 * 
 * '@'component({
 *  animations:[fadeInOut]
 * })
 * <div [@fadeInOut]></div>
 * @param name
 * @param timing 
 */
export function lightSpeedInFactory(name ="lightSpeedIn",timing = DEFAULT_TIMING) {
  return trigger(name, [
    transition("void => *", [
      style({
        transform: "translate3d(100%, 0, 0) skewX(-30deg)",
        opacity: 0
      }),
      animate(
        timing,
        keyframes([
          style({
            transform: "translate3d(100%, 0, 0)",
            opacity: 0,
            offset: 0
          }),
          style({ transform: "skewX(20deg)", opacity: 1, offset: 0.6 }),
          style({ transform: "skewX(-5deg)", opacity: 1, offset: 0.8 }),
          style({ transform: "translate3d(0, 0, 0)", opacity: 1, offset: 1 })
        ])
      )
    ])
  ]);
}
