import { Component, OnInit, Input } from "@angular/core";
import { ChildComponent } from "../../interfaces";
import { NgPopSelectComponent } from "../select.component";
import { NgPopSelectItem } from "../class";

@Component({
  selector: "ng-pop-select-default",
  templateUrl: "./select-default.component.html",
  styleUrls: ["./select-default.component.less"]
})
export class NgPopSelectDefaultComponent implements OnInit, ChildComponent {
  constructor(public containerComp: NgPopSelectComponent) {}
  @Input()
  item: NgPopSelectItem = new NgPopSelectItem();
  ngOnInit() {}
}
