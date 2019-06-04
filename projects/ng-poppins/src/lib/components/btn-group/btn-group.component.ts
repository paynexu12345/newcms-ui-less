/**
 * TODO: activate when select component is active ,the select dropdown will not disappear.
 */
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ContainerComponent } from "../base";
import { commonInitCfg } from "../comp-utils";
import { NgPopBtnGroupArrowComponent } from "./btn-group-arrow/btn-group-arrow.component";
import { NgPopBtnGroupDefaultItemComponent } from "./btn-group-default-item/btn-group-default-item.component";
import { NgPopBtnGroupDropdownItemComponent } from "./btn-group-dropdown-item/btn-group-dropdown-item.component";
import
{
  DEFAULT_BTN_GROUP_CONFIG,
  NgPopBtnGroupConfig,
  NgPopBtnGroupItem
} from "./class";

@Component( {
  selector: "ng-pop-btn-group",
  templateUrl: "./btn-group.component.html",
  styleUrls: ["./btn-group.component.less"]
} )
export class NgPopBtnGroupComponent
  extends ContainerComponent<
  NgPopBtnGroupDropdownItemComponent | NgPopBtnGroupDefaultItemComponent
  >
  implements OnInit
{
  constructor ()
  {
    super();
  }
  rootCssClass = "ng-pop-btn-group";
  _config: NgPopBtnGroupConfig = DEFAULT_BTN_GROUP_CONFIG;
  arrowComp: NgPopBtnGroupArrowComponent;
  items: NgPopBtnGroupItem[] = [];
  activeItem: NgPopBtnGroupItem;
  dropdownItems: NgPopBtnGroupItem[] = [];

  @Input( "config" )
  set config ( val )
  {
    if ( val ) commonInitCfg( this, val );
    this.items = [...val.items];
    this.activeItem = this.items[0];
    this.dropdownItems = [...val.items];
    this.dropdownItems.splice( 0, 1 );
  }
  get config ()
  {
    return this._config;
  }
  @Output() readonly clickBtn = new EventEmitter();
  ngOnInit () { }
}
