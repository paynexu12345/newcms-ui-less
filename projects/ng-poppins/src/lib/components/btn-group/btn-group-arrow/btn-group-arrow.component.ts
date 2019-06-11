import {Component, OnInit, HostListener, OnDestroy} from "@angular/core";
import {SubComponent} from "../../base";
import {NgPopBtnGroupComponent} from "../btn-group.component";
import {NgPopBtnGroupService} from '../btn-group.service';

@Component({
  selector: "ng-pop-btn-group-arrow",
  templateUrl: "./btn-group-arrow.component.html",
  styleUrls: ["./btn-group-arrow.component.less"]
})
export class NgPopBtnGroupArrowComponent extends SubComponent
  implements OnInit, OnDestroy
{
  constructor(public containerComp: NgPopBtnGroupComponent, public btnGroupService: NgPopBtnGroupService)
  {
    super();
  }

  @HostListener("click", ["$event"])
  onclick($event)
  {
    $event.stopPropagation();
    if(!this.containerComp.isDisabled)
    {
      this.containerComp.isActive = !this.containerComp.isActive;
      this.btnGroupService.deactivateAllExcept(this.containerComp);
    }
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
