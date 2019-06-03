import { Component, OnInit } from "@angular/core";
import { ContainerComponent } from "../base";
import { NgPopBtnGroupDropdownComponent } from "./btn-group-dropdown/btn-group-dropdown.component";
import { NgPopBtnGroupDefaultItemComponent } from "./btn-group-default-item/btn-group-default-item.component";

@Component({
  selector: "ng-pop-btn-group",
  templateUrl: "./btn-group.component.html",
  styleUrls: ["./btn-group.component.less"]
})
export class NgPopBtnGroupComponent
  extends ContainerComponent<NgPopBtnGroupDropdownComponent | NgPopBtnGroupDefaultItemComponent>
  implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {}
}
