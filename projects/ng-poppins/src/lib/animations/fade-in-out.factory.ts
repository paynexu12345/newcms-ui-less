import {
  state,
  trigger,
  transition,
  animate,
  style
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
export function fadeInOutFactory(name="fadeInOut",timing = DEFAULT_TIMING) {
  return trigger(name, [
    state("active", style({
      opacity: 1
    })),
    state("inactive", style({
      opacity: 0
    })),
    transition("active <=> inactive", animate(timing)),
    transition(":enter", [
      style({
        opacity: 0
      }),
      animate(
        timing,
        style({
          opacity: 1
        })
      )
    ]),
    transition(":leave", [
      style({
        opacity: 1
      }),
      animate(
        timing,
        style({
          opacity: 0
        })
      )
    ])
  ]);
}