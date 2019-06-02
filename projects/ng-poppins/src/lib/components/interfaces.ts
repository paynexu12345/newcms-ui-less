// import { EventEmitter, ElementRef, Input, Output } from "@angular/core";
// import { Subject } from 'rxjs';
// import { commonInitCfg } from './comp-utils';
// export type PositionType = "downLeft" | "downRight" | "upLeft" | "upRight";

// export abstract class AbstractContainerComponent {
//   childComps: any[];
//   addChildComp: (child: any) => void;
//   removeChildComp: (child: any) => void;
// }
// export abstract class ChildComponent {
//   containerComp: { [propName: string]: any };
// }
// export abstract class BaseConfigComponent {
//   readonly reservedCssClasses?: string[];
//   readonly rootCssClass: string;
//   config: { [propName: string]: any };
//   _config: { [propName: string]: any };
// }
// export interface CustomizeClassNames {
//   cssClasses?: string[];
// }
// export interface Disabled {
//   isDisabled?: boolean;
// }
// export interface ActiveIndex {
//   activeIndex: number | number[];
// }
// export class ContainerComponent<T> {
//   childComps: T[];
//   commonAddChildComp(child: T) {
//     this.childComps.push(child);
//   }
//   commonRemoveChildComp(child: T) {
//     this.childComps.forEach((comp, index) => {
//       if (child == comp) this.childComps.splice(index, 1);
//     });
//   }
//   addChildComp: (child: T, ...args) => void;
//   removeChildComp: (child: T, ...args) => void;
// }

// export class AlignDirection {
//   isVisible = false;
//   direction: PositionType = "downLeft";
//   element: ElementRef;
//   setPosition() {
//     const pos = this.element.nativeElement.getBoundingClientRect();
//     if (pos.left + this.element.nativeElement.offsetWidth > window.innerWidth) {
//       if (
//         pos.top + this.element.nativeElement.offsetHeight >
//         window.innerHeight
//       ) {
//         this.direction = "upRight";
//       } else {
//         this.direction = "downRight";
//       }
//     } else {
//       if (
//         pos.top + this.element.nativeElement.offsetHeight >
//         window.innerHeight
//       ) {
//         this.direction = "upLeft";
//       } else {
//         this.direction = "downLeft";
//       }
//     }
//   }
//   setVisible() {
//     this.isVisible = true;
//   }
// }

// export class Activatable {
//   isActive = false;
//   onActivate: EventEmitter<any> = new EventEmitter();
//   onDeactivate: EventEmitter<any> = new EventEmitter();
//   commonActivate() {
//     if (!this.isActive) {
//       this.onActivate.emit(this);
//     }
//     this.isActive = true;
//   }
//   commonDeactivate() {
//     if (this.isActive) {
//       this.onDeactivate.emit(this);
//     }
//     this.isActive = false;
//   }
//   activate: (...args) => void;
//   deactivate: (...args) => void;
// }
