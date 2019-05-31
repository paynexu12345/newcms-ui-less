import { Component, OnInit, HostListener, Input, OnDestroy } from "@angular/core";
import { ChildComponent } from "../../interfaces";
import { NgPopSelectComponent } from "../select.component";
import { NgPopSelectItem } from "../class";

@Component({
  selector: "ng-pop-select-dropdown-item",
  templateUrl: "./select-dropdown-item.component.html",
  styleUrls: ["./select-dropdown-item.component.less"]
})
export class NgPopSelectDropdownItemComponent
  implements OnInit, OnDestroy, ChildComponent {
  constructor(public containerComp: NgPopSelectComponent) { }
  hide = false;
  sub1 = null;
  @Input()
  item: NgPopSelectItem;
  @HostListener("click", ["$event"])
  onclick($event) {
    $event.stopPropagation();
    if (!this.item.disabled) {
      this.containerComp.activeItem = this.item;
      this.containerComp.deactivate();
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
