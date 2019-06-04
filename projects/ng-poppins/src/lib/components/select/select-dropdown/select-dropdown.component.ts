import {Component, OnInit, HostListener} from "@angular/core";
import {NgPopSelectComponent} from "../select.component";
import {fadeInDownFactory} from "../../../animations";
import {DEFAULT_TIMING} from "../../../animations/class";
import {_$} from "../../comp-utils";
import {PopupLayerComponent} from '../../base';
const fadeInDown = fadeInDownFactory("fadeInDown", DEFAULT_TIMING, "-5%");
@Component({
  selector: "ng-pop-select-dropdown",
  templateUrl: "./select-dropdown.component.html",
  styleUrls: ["./select-dropdown.component.less"],
  animations: [fadeInDown]
})
export class NgPopSelectDropdownComponent extends PopupLayerComponent
  implements OnInit
{
  constructor(public containerComp: NgPopSelectComponent)
  {
    super();
  }
  @HostListener("window:mousewheel", ["$event"])
  onwindowmousewheel($event)
  {
    $event.stopPropagation();
    this.containerComp.isActive = false;
  }

  @HostListener("window:click", ["$event"])
  onwindowclick($event)
  {
    this.containerComp.isActive = false;
  }
  ngOnInit()
  {
    this.init();
  }
}
