import {
  state,
  trigger,
  transition,
  animate,
  style,
  query,
  group,
  keyframes,
  stagger,
  AnimationTriggerMetadata
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
export function slideDownFactory(name = "slideDown", timing = DEFAULT_TIMING) {
  return trigger(name, [
    transition("void => *", [
      style({
        height:0
      }),
      animate(
        timing,
        style({
          height:"*"
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