// TODOs:scroll when up down key
import {
  Component,
  OnInit,
  HostListener,
  Input,
  OnDestroy
} from "@angular/core";
import {
  commonInitCfg,
  filterActiveItem,
} from "../comp-utils";
import {
  DEFAULT_NGPOP_SELECT_CONFIG,
  NgPopSelectItem
} from "./class";
import { NgPopSelectDropdownItemComponent } from "./select-dropdown-item/select-dropdown-item.component";
import { NgPopSelectDefaultComponent } from ".";
import { NgPopSelectIconComponent } from "./select-icon/select-icon.component";
import { NgPopSelectService } from './select.service';
import { NgPopSelectInputComponent } from './select-input/select-input.component';
import { ContainerComponent } from '../base';

@Component({
  selector: "ng-pop-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.less"]
})
export class NgPopSelectComponent extends ContainerComponent<NgPopSelectDropdownItemComponent>
  implements OnInit, OnDestroy {
  constructor(
    public selectService: NgPopSelectService
  ) { 
    super();
  }
  config = DEFAULT_NGPOP_SELECT_CONFIG;
  rootCssClass = "ng-pop-select";
  defaultItemComp: NgPopSelectDefaultComponent;
  iconItemComp: NgPopSelectIconComponent;
  inputComp: NgPopSelectInputComponent;
  activeItem: NgPopSelectItem;
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
    this.activeItem = filterActiveItem(this.config.items);
  }

  @HostListener("click", ["$event"])
  onclick($event) {
    $event.stopPropagation();
    this.selectService.deactivateAllExcept(this);
    this.isActive = !this.isActive;
  }

  ngOnInit() {
    this.selectService.addChildComp(this);  
  }
  ngOnDestroy() {
    this.selectService.removeChildComp(this);
  }
}
