import {Component, OnInit, HostListener} from "@angular/core";
import {NgPopBtnGroupComponent} from "../btn-group.component";
import {fadeInFactory, fadeInDownFactory} from "../../../animations";
import {DEFAULT_TIMING} from "../../../animations/class";
import {PopupLayerComponent} from '../../base';
const fadeIn = fadeInFactory();
const fadeInDown = fadeInDownFactory("fadeInDown", DEFAULT_TIMING, "-5%");
@Component({
  selector: "ng-pop-btn-group-dropdown",
  templateUrl: "./btn-group-dropdown.component.html",
  styleUrls: ["./btn-group-dropdown.component.less"],
  animations: [fadeIn, fadeInDown]
})
export class NgPopBtnGroupDropdownComponent extends PopupLayerComponent
  implements OnInit
{
  constructor(public containerComp: NgPopBtnGroupComponent)
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
