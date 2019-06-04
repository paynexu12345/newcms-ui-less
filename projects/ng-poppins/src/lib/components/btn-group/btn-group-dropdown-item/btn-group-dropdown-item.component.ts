import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {MainSubComponent} from "../../base";
import {NgPopBtnGroupComponent} from "../btn-group.component";
import {NgPopBtnGroupItem} from "../class";

@Component({
  selector: "ng-pop-btn-group-dropdown-item",
  templateUrl: "./btn-group-dropdown-item.component.html",
  styleUrls: ["./btn-group-dropdown-item.component.less"]
})
export class NgPopBtnGroupDropdownItemComponent
  extends MainSubComponent<NgPopBtnGroupItem>
  implements OnInit, OnDestroy
{
  constructor(public containerComp: NgPopBtnGroupComponent)
  {
    super();
  }
  _item: NgPopBtnGroupItem;
  get item()
  {
    return this._item;
  }
  @Input()
  set item(val)
  {
    if(val)
    {
      this._item = val;
      this.isDisabled = val.isDisabled;
    }
  }
  onclick($event)
  {
    if(!this.isDisabled)
      this.containerComp.clickBtn.emit({
        id: this.item.id
      });
  }
  ngOnInit()
  {
    this.containerComp.addMainSubComp(this);
  }
  ngOnDestroy()
  {
    this.containerComp.removeMainSubComp(this);
  }
}
