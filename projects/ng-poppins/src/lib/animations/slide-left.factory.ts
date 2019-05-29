import {
  state,
  trigger,
  transition,
  animate,
  style,
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
export function slideLeftFactory(name = "slideLeft", timing = DEFAULT_TIMING,offset = "-100%") {
  return trigger(name, [
    state("active", style({
      transform: "translateX(0)",
      opacity: 1
    })),
    state("inactive", style({
      transform: "translateX(" + offset+")",
      opacity: 0
    })),
    transition("active <=> inactive",animate(timing)),
    transition(":enter", [
      style({
        transform: "translateX(" + offset + ")",
        opacity:0
      }),
      animate(
        timing,
        style({
          transform: "translateX(0)",
          opacity: 1
        })
      )
    ]),
    transition(":leave", [
      style({
        transform: "translateX(0)",
        opacity: 1
      }),
      animate(
        timing,
        style({
          transform: "translateX(" + offset + ")",
          opacity: 0
        })
      )
    ])
  ]);
}