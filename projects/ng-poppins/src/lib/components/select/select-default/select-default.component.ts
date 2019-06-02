import { Component, OnInit, Input } from "@angular/core";
import { NgPopSelectComponent } from "../select.component";
import { NgPopSelectItem } from "../class";
import { ChildComponent } from '../../base';

@Component({
  selector: "ng-pop-select-default",
  templateUrl: "./select-default.component.html",
  styleUrls: ["./select-default.component.less"]
})
export class NgPopSelectDefaultComponent extends ChildComponent implements OnInit  {
  constructor(public containerComp: NgPopSelectComponent) {
    super();
  }
  @Input()
  item: NgPopSelectItem = new NgPopSelectItem();
  ngOnInit() {}
}
