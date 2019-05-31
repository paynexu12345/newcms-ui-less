import { Injectable } from "@angular/core";
import { NgPopSelectComponent } from "./select.component";
import { ContainerComponent } from "../interfaces";
import { applyMixins } from '../comp-utils';

@Injectable()
export class NgPopSelectService
  implements ContainerComponent<NgPopSelectComponent> {
  constructor() {}
  childComps: NgPopSelectComponent[] = [];

  commonAddChildComp: (comp: NgPopSelectComponent) => {};

  commonRemoveChildComp: (comp: NgPopSelectComponent) => {};

  addChildComp(comp: NgPopSelectComponent) {
    this.commonAddChildComp(comp);
  }

  removeChildComp(comp: NgPopSelectComponent) {
    this.commonRemoveChildComp(comp);
  }

  deactivateAllExcept(comp: NgPopSelectComponent){
    this.childComps.forEach(child=>{
      if(comp != child){
        child.deactivate();
      }
    })
  }
}
applyMixins(NgPopSelectService, [ ContainerComponent]);
