import {
  Component,
  OnInit,
  HostListener
} from "@angular/core";
import { NgPopSelectComponent } from "../select.component";
import { fadeInDownFactory } from '../../../animations';
import { ChildComponent } from '../../base';
import { NgPopPopupLayerComponent } from '../../popup-layer/popup-layer.component';
const fadeInDown = fadeInDownFactory();
declare var $;
@Component({
  selector: "ng-pop-select-dropdown",
  templateUrl: "./select-dropdown.component.html",
  styleUrls: ["./select-dropdown.component.less"],
  animations: [fadeInDown]
})
export class NgPopSelectDropdownComponent extends NgPopPopupLayerComponent implements OnInit {
  constructor(public containerComp: NgPopSelectComponent) {
    super();
  }
  @HostListener("window:mousewheel", ["$event"])
  onwindowmousewheel($event) {
    $event.stopPropagation();
    this.containerComp.isActive = false;
  }

  @HostListener("window:click", ["$event"])
  onwindowclick($event) {
    this.containerComp.isActive = false;
  }
  ngOnInit() {
    setTimeout(() => {
      this.setPosition();
      this.setMaxHeight();
      this.setVisible();
    }, 200);
  }
}
