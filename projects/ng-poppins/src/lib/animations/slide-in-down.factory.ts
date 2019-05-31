import {
  state,
  trigger,
  transition,
  animate,
  style
} from "@angular/animations";
import { DEFAULT_TIMING } from "./class";
/**
 * @HowToUse
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
export function slideInDownFactory(
  name = "slideInDown",
  timing = DEFAULT_TIMING,
  offset = "-100%"
) {
  return trigger(name, [
    transition("void => *", [
      style({
        height:0,
        opacity:0
      }),
      animate(
        timing,
        style({
          height:"*",
          opacity:1
        })
      )
    ]),
    transition("* => void", [
      style({
        height:"*"
      }),
      animate(
        timing,
        style({
          height:0
        })
      )
    ])
  ]);
}
