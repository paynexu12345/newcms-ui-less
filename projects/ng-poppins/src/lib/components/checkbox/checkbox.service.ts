import {Injectable} from '@angular/core';
import {NgPopCheckboxComponent} from './checkbox.component';

@Injectable()
export class NgPopCheckBoxService
{
  constructor() {}
  groups: Map<NgPopCheckboxComponent, NgPopCheckboxComponent[]> = new Map();
  addGroup(checkAllComp: NgPopCheckboxComponent)
  {
    this.groups.set(checkAllComp, []);
  }
  removeGroup(checkAllComp: NgPopCheckboxComponent)
  {
    this.groups.delete(checkAllComp);
  }
  addItemToGroup(item: NgPopCheckboxComponent)
  {
    for(const group of this.groups)
    {
      if(group[0].name == item.name)
      {
        group[1].push(item);
        break;
      }
    }
  }
  removeItemFromGroup(item: NgPopCheckboxComponent)
  {
    for(const group of this.groups)
    {
      if(group[0].name == item.name)
      {
        group[1].forEach((e, i) =>
        {
          if(e == item)
          {
            group[1].splice(i, 1);
          }
        });;
        break;
      }
    }
  }
}