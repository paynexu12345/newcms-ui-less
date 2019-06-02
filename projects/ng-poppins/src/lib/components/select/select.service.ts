import { Injectable } from "@angular/core";
import { NgPopSelectComponent } from "./select.component";
import { ContainerService } from '../base';

@Injectable()
export class NgPopSelectService
  extends ContainerService<NgPopSelectComponent> {
  constructor() {
    super();
  }
  deactivateAllExcept(comp: NgPopSelectComponent) {
    this.childComps.forEach(child => {
      if (comp != child) {
        child.isActive = false;
      }
    })
  }
}
