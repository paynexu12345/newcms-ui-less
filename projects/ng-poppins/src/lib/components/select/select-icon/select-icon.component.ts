import { Component, OnInit } from "@angular/core";
import { ChildComponent } from '../../interfaces';
import { NgPopSelectComponent } from '../select.component';

@Component({
  selector: "ng-pop-select-icon",
  templateUrl: "./select-icon.component.html",
  styleUrls: ["./select-icon.component.less"]
})
export class NgPopSelectIconComponent implements OnInit, ChildComponent {
  constructor(public containerComp: NgPopSelectComponent) { }
  ngOnInit() { }
}
