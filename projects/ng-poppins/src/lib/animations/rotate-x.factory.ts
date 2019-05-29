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
 * import {rotateXFactory} from "ngx-cms-common"
 * let rotateX = rotateXFactory("rotateX",".3s ease-in-out")
 * 
 * '@'component({
 *  animations:[rotateX]
 * })
 * <div [@rotateX]="isactive?'active':'inactive'"></div>
 * @param name
 * @param timing 
 */
export function rotateXFactory(name = "rotateX", timing = DEFAULT_TIMING) {
  return trigger(name, [
    state("active",
      style({
        transform:"rotateX(180deg)"
      })
    ),
    state("inactive",
      style({
        transform: "rotateX(0)"
      })
    ),
    transition("active <=> inactive", [
      animate(
        timing
      )
    ])
  ]);
}
