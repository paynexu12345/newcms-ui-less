import {Injectable} from '@angular/core';
import {ContainerService} from '../base';
import {NgPopPopoutComponent} from './popout.component';

@Injectable()
export class NgPopPopoutService extends ContainerService<NgPopPopoutComponent>
{

  constructor()
  {
    super();
  }

  show(id)
  {
    this.mainSubComps.forEach(item =>
    {
      if(item.timeStamp == id)
      {
        item.isActive = true;
      }
    })
  }
  hide(id)
  {
    this.mainSubComps.forEach(item =>
    {
      if(item.timeStamp == id)
      {
        item.isActive = false;
      }
    })
  }
}