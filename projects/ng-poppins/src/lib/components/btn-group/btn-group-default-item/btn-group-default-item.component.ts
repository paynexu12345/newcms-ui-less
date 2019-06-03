import { Component, OnInit } from "@angular/core";
import { MainSubComponent } from "../../base";
import { NgPopBtnGroupItem } from "../class";

@Component({
  selector: "ng-pop-btn-group-default-item",
  templateUrl: "./btn-group-default-item.component.html",
  styleUrls: ["./btn-group-default-item.component.less"]
})
export class NgPopBtnGroupDefaultItemComponent
  extends MainSubComponent<NgPopBtnGroupItem>
  implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {}
}
