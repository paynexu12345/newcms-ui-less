import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener
} from "@angular/core";
import { ChildComponent, PositionType, AlignDirection } from "../../interfaces";
import { NgPopSelectComponent } from "../select.component";
import { applyMixins } from "../../comp-utils";
import { fadeInDownFactory } from '../../../animations';
const fadeInDown = fadeInDownFactory();
@Component({
  selector: "ng-pop-select-dropdown",
  templateUrl: "./select-dropdown.component.html",
  styleUrls: ["./select-dropdown.component.less"],
  animations: [fadeInDown]
})
export class NgPopSelectDropdownComponent
  implements OnInit, ChildComponent, AlignDirection {
  constructor(public containerComp: NgPopSelectComponent) { }
  isVisible = false;
  direction: PositionType = "downLeft";
  @ViewChild("element") element: ElementRef;
  setPosition: () => void;
  setVisible: () => void;

  @HostListener("window:mousewheel", ["$event"])
  onmousewheel($event) {
    this.containerComp.deactivate();
  }
  
  @HostListener("window:click", ["$event"])
  onclickWindow($event) {
    this.containerComp.deactivate();
  }
  ngOnInit() {
    setTimeout(() => {
      this.setPosition();
      this.setVisible();
    }, 200);
  }
}
applyMixins(NgPopSelectDropdownComponent, [AlignDirection]);
