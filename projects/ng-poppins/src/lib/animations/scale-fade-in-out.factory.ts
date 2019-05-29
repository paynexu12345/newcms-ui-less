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
export function scaleFadeInOutFactory(name ="scaleFadeInOut",timing = DEFAULT_TIMING,fromScale=0) {
  return trigger(name, [
    transition("void => *", [
      style({
        opacity: 0,
        transform: "scale(" + fromScale+")"
      }),
      animate(
        timing,
        style({
          opacity: 1,
          transform: "scale(1)"
        })
      )
    ]),
    transition("* => void", [
      style({
        opacity: 1,
        transform: "scale(1)"
      }),
      animate(
        timing,
        style({
          opacity: 0,
          transform: "scale(" + fromScale + ")"
        })
      )
    ])
  ]);
       }