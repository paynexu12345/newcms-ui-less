import { EventEmitter } from "@angular/core";
export abstract class AbstractContainerComponent {
  childComps: any[];
  addChildComp: (child: any) => void;
  removeChildComp: (child: any) => void;
}
export abstract class ChildComponent {
  containerComp: any;
}
export abstract class HasConfig {
  readonly reservedCssClasses?: string[];
  rootCssClass: string;
  config: { [propName: string]: any };
  _config: { [propName: string]: any };
}
export interface CustomizeClassNames {
  cssClasses?: string[];
}

export class ContainerComponent<T> {
  childComps: T[];
  addChildComp(child: T) {
    this.childComps.push(child);
  }
  removeChildComp(child: T) {
    this.childComps.forEach((comp, index) => {
      if (child == comp) this.childComps.splice(index, 1);
    });
  }
}

export class Activatable {
  isActive: boolean;
  onActivate: EventEmitter<any>;
  onDeactivate: EventEmitter<any>;
  commonActivate() {
    if (!this.isActive) {
      this.onActivate.emit(this);
      console.log("on activated");
    }
    this.isActive = true;
  }
  commonDeactivate() {
    if (this.isActive) {
      this.onDeactivate.emit(this);
      console.log("on de activated");
    }
    this.isActive = false;
  }
}
