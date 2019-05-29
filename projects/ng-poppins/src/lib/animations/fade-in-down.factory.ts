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
export function fadeInDownFactory(
  name = "fadeInDown",
  timing = DEFAULT_TIMING,
  offset = "-100%"
) {
  return trigger(name, [
    state(
      "active",
      style({
        transform: "translateY(0)",
        opacity: 1
      })
    ),
    state(
      "inactive",
      style({
        transform: "translateY(" + offset + ")",
        opacity: 0
      })
    ),
    transition("active <=> inactive", animate(timing)),
    transition(":enter", [
      style({
        transform: "translateY(" + offset + ")",
        opacity: 0
      }),
      animate(
        timing,
        style({
          transform: "translateY(0)",
          opacity: 1
        })
      )
    ]),
    transition(":leave", [
      style({
        transform: "translateY(0)",
        opacity: 1
      }),
      animate(
        timing,
        style({
          transform: "translateY(" + offset + ")",
          opacity: 0
        })
      )
    ])
  ]);
}
