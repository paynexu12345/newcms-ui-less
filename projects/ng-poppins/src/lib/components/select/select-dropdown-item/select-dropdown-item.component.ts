import { Component, OnInit, HostListener, Input } from "@angular/core";
import { ChildComponent } from "../../interfaces";
import { NgPopSelectComponent } from "../select.component";
import { NgPopSelectItem } from "../class";

@Component({
  selector: "ng-pop-select-dropdown-item",
  templateUrl: "./select-dropdown-item.component.html",
  styleUrls: ["./select-dropdown-item.component.less"]
})
export class NgPopSelectDropdownItemComponent
  implements OnInit, ChildComponent {
  constructor(public containerComp: NgPopSelectComponent) {}
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
  }
  ngOnDestroy() {
    this.containerComp.removeChildComp(this);
  }
}
