import { Component, OnInit } from "@angular/core";
import { NgPopSelectComponent } from '../select.component';
import { SubComponent } from '../../base';

@Component({
  selector: "ng-pop-select-icon",
  templateUrl: "./select-icon.component.html",
  styleUrls: ["./select-icon.component.less"]
})
export class NgPopSelectIconComponent extends SubComponent implements OnInit {
  constructor(public containerComp: NgPopSelectComponent) { 
    super();
  }
  ngOnInit() { }
}
