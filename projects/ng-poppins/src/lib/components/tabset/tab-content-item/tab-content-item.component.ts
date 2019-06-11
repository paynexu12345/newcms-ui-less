import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {MainSubComponent} from '../../base';
import {NgPopTabsetComponent} from '../tabset.component';
import {NgPopTabItem} from '../class';
import {fadeInFactory, slideInLeftFactory} from '../../../animations';
import {DEFAULT_TIMING} from '../../../animations/class';
let fadeIn = fadeInFactory();
let slideInLeft = slideInLeftFactory("slideInLeft", DEFAULT_TIMING, "5%")
@Component({
  selector: 'ng-pop-tab-content-item',
  templateUrl: './tab-content-item.component.html',
  styleUrls: ['./tab-content-item.component.less'],
  animations: [fadeIn, slideInLeft]
})
export class NgPopTabContentItemComponent extends MainSubComponent<NgPopTabItem>
  implements OnInit, OnDestroy
{
  constructor(
    public containerComp: NgPopTabsetComponent
  )
  {
    super();
  }
  @Input()
  set item(val)
  {
    if(val)
    {
      this._item = val;
      this.isActive = this._item.isActive;
      this.isDisabled = this._item.isDisabled
    }
  }
  get item()
  {
    return this._item;
  }
  ngOnInit()
  {
    this.containerComp.addContentComp(this);
  }

  ngOnDestroy()
  {
    this.containerComp.removeContentComp(this);
  }
}
