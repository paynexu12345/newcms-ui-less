import {Component, OnInit, HostListener, OnDestroy} from "@angular/core";
import {SubComponent} from "../../base";
import {NgPopBtnGroupComponent} from "../btn-group.component";

@Component({
  selector: "ng-pop-btn-group-arrow",
  templateUrl: "./btn-group-arrow.component.html",
  styleUrls: ["./btn-group-arrow.component.less"]
})
export class NgPopBtnGroupArrowComponent extends SubComponent
  implements OnInit, OnDestroy
{
  constructor(public containerComp: NgPopBtnGroupComponent)
  {
    super();
  }

  @HostListener("click", ["$event"])
  onclick($event)
  {
    $event.stopPropagation();
    this.containerComp.isActive = !this.containerComp.isActive;
  }

  ngOnInit()
  {
    this.containerComp.arrowComp = this;
  }

  ngOnDestroy()
  {
    this.containerComp.arrowComp = null;
  }
}
