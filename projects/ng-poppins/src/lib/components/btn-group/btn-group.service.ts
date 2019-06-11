import {Injectable} from '@angular/core';
import {ContainerService} from '../base';
import {NgPopBtnGroupComponent} from './btn-group.component';

@Injectable()
export class NgPopBtnGroupService extends ContainerService<NgPopBtnGroupComponent> {

  constructor()
  {
    super();
  }
  deactivateAllExcept(comp: NgPopBtnGroupComponent)
  {
    this.mainSubComps.forEach(child =>
    {
      if(comp != child)
      {
        child.isActive = false;
      }
    })
  }
}
