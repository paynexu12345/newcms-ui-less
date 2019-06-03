import {
  Component,
  OnInit,
  HostListener,
  Input,
  OnDestroy
} from "@angular/core";
import { NgPopSelectComponent } from "../select.component";
import { NgPopSelectItem } from "../class";
import { SubComponent, MainSubComponent } from "../../base";

@Component({
  selector: "ng-pop-select-dropdown-item",
  templateUrl: "./select-dropdown-item.component.html",
  styleUrls: ["./select-dropdown-item.component.less"]
})
export class NgPopSelectDropdownItemComponent extends MainSubComponent<NgPopSelectItem>
  implements OnInit, OnDestroy, SubComponent {
  constructor(public containerComp: NgPopSelectComponent) {
    super();
  }
  isHide = false;
  sub1 = null;
  @Input("item")
  set item(val) {
    if (val) {
      this.isDisabled = val.isDisabled;
      this.isActive = val.isActive;
      this._item = val;
    }
  }
  get item(){
    return this._item;
  }
  @HostListener("click", ["$event"])
  onclick($event) {
    $event.stopPropagation();
    if (!this.isDisabled) {
      this.item.isActive = true;
      this.containerComp.activeItem.isActive = false;
      this.containerComp.activeItem = this.item;
      this.containerComp.isActive = false;
      this.containerComp.propagateChange(this.item[this.containerComp.config.idKey])
    }
  }
  ngOnInit() {
    this.containerComp.addMainSubComp(this);
    if (this.containerComp.inputComp)
      this.sub1 = this.containerComp.inputComp.onSearch.subscribe(text => {
        if (
          this.item[this.containerComp.config.textKey]
            .toLowerCase()
            .indexOf(text) >= 0
        ) {
          this.isHide = false;
        } else {
          this.isHide = true;
        }
      });
  }
  ngOnDestroy() {
    this.containerComp.removeMainSubComp(this);
    if (this.sub1) this.sub1.unsubscribe();
  }
}
