import { Component, OnInit, Input } from "@angular/core";
import { NgPopHeaderNavComponent } from "../header-nav.component";
import { HeaderNavItem, DEFAULT_HEADER_NAV_ITEM } from "../class";
import { SubComponent, MainSubComponent } from "../../base";

@Component( {
  selector: "ng-pop-header-nav-item",
  templateUrl: "./header-nav-item.component.html"
} )
export class NgPopHeaderNavItemComponent extends MainSubComponent<HeaderNavItem>
  implements OnInit
{
  constructor ( public containerComp: NgPopHeaderNavComponent )
  {
    super();
  }
  @Input( "item" )
  set item ( val )
  {
    if ( val )
    {
      this._item = val;
    }
  }
  get item ()
  {
    return this._item;
  }
  ngOnInit ()
  {
    this.containerComp.addMainSubComp( this );
    this.isActive = this.item.isActive;
  }
}
