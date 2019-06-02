import { Component, OnInit, HostListener, Input, OnDestroy, Output, EventEmitter } from "@angular/core";
import { NgPopSelectComponent } from "../select.component";
import { NgPopSelectItem } from "../class";
import { ChildComponent } from '../../base';

@Component({
  selector: "ng-pop-select-dropdown-item",
  templateUrl: "./select-dropdown-item.component.html",
  styleUrls: ["./select-dropdown-item.component.less"]
})
export class NgPopSelectDropdownItemComponent extends ChildComponent
  implements OnInit, OnDestroy, ChildComponent {
  constructor(public containerComp: NgPopSelectComponent) { 
    super();
  }
  hide = false;
  sub1 = null;
  item: NgPopSelectItem;
  @Input("item")
  set _item(val) {
    if (val) {
      this.isDisabled = val.isDisabled;
      this.isActive = val.isActive;
      this.item = val;
    }
  }
  @HostListener("click", ["$event"])
  onclick($event) {
    $event.stopPropagation();
    if (!this.isDisabled) {
      this.item.isActive = true;
      this.containerComp.activeItem.isActive = false;
      this.containerComp.activeItem = this.item;
      this.containerComp.isActive = false;
    }
  }
  ngOnInit() {
    this.containerComp.addChildComp(this);
    if (this.containerComp.inputComp)
      this.sub1 = this.containerComp.inputComp.onSearch.subscribe(text => {
        if (this.item[this.containerComp.config.textKey].toLowerCase().indexOf(text) >= 0) {
          this.hide = false;
        } else {
          this.hide = true;
        }
      });
  }
  ngOnDestroy() {
    this.containerComp.removeChildComp(this);
    if (this.sub1) this.sub1.unsubscribe();
  }
}
