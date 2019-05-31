import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy
} from "@angular/core";
import {
  Activatable,
  BaseConfigComponent,
  ContainerComponent
} from "../interfaces";
import {
  applyMixins,
  commonInitCfg,
  filterActiveItem,
  commonRegisterComponent,
  commonCancelComponent
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

@Component({
  selector: "ng-pop-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.less"]
})
export class NgPopSelectComponent
  implements
  OnInit,
  OnDestroy,
  Activatable,
  BaseConfigComponent,
  ContainerComponent<NgPopSelectDropdownItemComponent> {
  constructor(
    public selectService: NgPopSelectService
  ) { }

  isActive = false;
  config = DEFAULT_NGPOP_SELECT_CONFIG;
  rootCssClass = "ng-pop-select";
  reservedCssClasses: string[] = [];
  childComps: NgPopSelectDropdownItemComponent[] = [];
  defaultItemComp: NgPopSelectDefaultComponent;
  iconItemComp: NgPopSelectIconComponent;
  activeItem: NgPopSelectItem;
  inputComp: NgPopSelectInputComponent;

  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
    this.activeItem = filterActiveItem(this.config.items);
  }

  @Output() onActivate: EventEmitter<this> = new EventEmitter();

  @Output() onDeactivate: EventEmitter<this> = new EventEmitter();

  commonActivate: () => void;

  commonDeactivate: () => void;

  activate() {
    this.commonActivate();
  }
  deactivate() {
    this.commonDeactivate();
  }

  commonAddChildComp: (comp: NgPopSelectDropdownItemComponent) => void;

  commonRemoveChildComp: (comp: NgPopSelectDropdownItemComponent) => void;

  addChildComp(comp: NgPopSelectDropdownItemComponent) {
    this.commonAddChildComp(comp);
  }

  removeChildComp(comp: NgPopSelectDropdownItemComponent) {
    this.commonRemoveChildComp(comp);
  }

  @HostListener("click", ["$event"])
  onclick($event) {
    $event.stopPropagation();
    this.selectService.deactivateAllExcept(this);
    if (!this.config.disabled) {
      if (!this.isActive) {
        this.activate();
      } else {
        this.deactivate();
      }
    }
  }

  ngOnInit() {
    this.selectService.addChildComp(this);
  }
  ngOnDestroy() {
    this.selectService.removeChildComp(this);
  }
}
applyMixins(NgPopSelectComponent, [Activatable, ContainerComponent]);
