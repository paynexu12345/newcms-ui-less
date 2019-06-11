// TODOs:scroll when up down key
// TODOS:support group
import
{
  Component,
  OnInit,
  HostListener,
  Input,
  OnDestroy,
  forwardRef
} from "@angular/core";
import {commonInitCfg} from "../comp-utils";
import {EXAMPLE_SELECT_CONFIG, NgPopSelectItem} from "./class";
import {NgPopSelectDropdownItemComponent} from "./select-dropdown-item/select-dropdown-item.component";
import {NgPopSelectDefaultComponent} from ".";
import {NgPopSelectIconComponent} from "./select-icon/select-icon.component";
import {NgPopSelectService} from "./select.service";
import {NgPopSelectInputComponent} from "./select-input/select-input.component";
import {ContainerComponent} from "../base";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

@Component({
  selector: "ng-pop-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.less"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // tslint:disable-next-line: no-forward-ref
      useExisting: forwardRef(() => NgPopSelectComponent),
      multi: true
    }
  ]
})
export class NgPopSelectComponent
  extends ContainerComponent<NgPopSelectDropdownItemComponent>
  implements OnInit, OnDestroy, ControlValueAccessor
{
  constructor(public selectService: NgPopSelectService)
  {
    super();
  }
  _config = EXAMPLE_SELECT_CONFIG;
  rootCssClass = "ng-pop-select";
  defaultItemComp: NgPopSelectDefaultComponent;
  iconItemComp: NgPopSelectIconComponent;
  inputComp: NgPopSelectInputComponent;
  activeItem: NgPopSelectItem = new NgPopSelectItem();
  items: NgPopSelectItem = [];
  @Input("config")
  set config(val)
  {
    commonInitCfg(this, val);
    this.items = [...this.config.items];
    //This value would be overwriten by the value in writeValue method, and the function of this value is to set a default value if no ngModel attribute is bind
    this.activeItem = this.items[0];
  }
  get config()
  {
    return this._config;
  }

  @HostListener("click", ["$event"])
  onclick($event)
  {
    $event.stopPropagation();
    this.selectService.deactivateAllExcept(this);
    this.isActive = !this.isActive;
  }
  propagateChange: any = () => {};
  registerOnChange(fn)
  {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
  writeValue(val)
  {
    if(val != null && val != undefined)
    {
      let i = 0;
      this.items.forEach((item, index) =>
      {
        if(item[this.config.idKey] == val)
        {
          i = index;
          item.isActive = true;
        } else
        {
          item.isActive = false;
        }
      });
      if(i >= 0)
      {
        this.activeItem = this.items[i];
      } else
      {
        this.activeItem = this.items[0];
      }
    }
  }
  ngOnInit()
  {
    this.selectService.addMainSubComp(this);
  }
  ngOnDestroy()
  {
    this.selectService.removeMainSubComp(this);
  }
}
