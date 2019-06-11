import {Component, OnInit, HostListener, Input, OnDestroy} from '@angular/core';
import {BaseComponent} from '../base';
import {NgPopCheckBoxService} from './checkbox.service';

@Component({
  selector: 'ng-pop-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class NgPopCheckboxComponent extends BaseComponent implements OnInit, OnDestroy
{
  constructor(public checkboxService: NgPopCheckBoxService)
  {
    super();
  }
  rootCssClass = "iconfont ng-pop-checkbox";
  reservedCssClasses = [];
  // 1:checkall 2:normal check
  @Input() type = 2;
  @Input() name = "";
  @Input() text = "";
  @Input()
  set isDisabled(val: any)
  {
    this.commonSetDisabled(val);
  };
  get isDisabled()
  {
    return this._isDisabled;
  }
  @HostListener("click", ["$event"])
  click()
  {
    this.isActive = !this.isActive;
    if(this.type == 1)
    {
      let items = this.checkboxService.groups.get(this);
      items.map(item => {item.isActive = this.isActive});
    }
    else
    {
      for(let group of this.checkboxService.groups)
      {
        if(group[0].name == this.name)
        {
          let d = true;
          group[1].forEach((e, i) =>
          {
            if(e.isActive == false)
            {
              d = false;
            }
          });
          group[0].isActive = d ? true : false;
        }
      }
    }
  }
  ngOnInit()
  {
    if(this.type == 1)
    {
      this.checkboxService.addGroup(this);
    }
    else
    {
      this.checkboxService.addItemToGroup(this);
    }
  }
  ngOnDestroy()
  {
    if(this.type == 1)
    {
      this.checkboxService.removeGroup(this);
    }
    else
    {
      this.checkboxService.removeItemFromGroup(this);
    }
  }

}
