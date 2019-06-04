import {Component, Input, OnInit} from "@angular/core";
import {SubComponent} from "../../base";
import {NgPopBtnGroupComponent} from "../btn-group.component";
import {NgPopBtnGroupItem} from "../class";

@Component({
  selector: "ng-pop-btn-group-default-item",
  templateUrl: "./btn-group-default-item.component.html",
  styleUrls: ["./btn-group-default-item.component.less"]
})
export class NgPopBtnGroupDefaultItemComponent extends SubComponent
  implements OnInit
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
  onclick()
  {
    if(!this.isDisabled)
      this.containerComp.clickBtn.emit({
        id: this.item.id
      });
  }

  ngOnInit() {}
}
