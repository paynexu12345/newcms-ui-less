import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  ViewChild
} from "@angular/core";
import { ChildComponent, Activatable } from "../../interfaces";
import { NgPopTabsetComponent } from "../tabset.component";
import { applyMixins } from "../../comp-utils";

@Component({
  selector: "ng-pop-tab-item",
  templateUrl: "./tab-item.component.html",
  styleUrls: ["./tab-item.component.css"]
})
export class NgPopTabItemComponent
  implements OnInit, ChildComponent, Activatable {
  constructor(
    public containerComp: NgPopTabsetComponent,
    public elementRef: ElementRef
  ) {}
  @ViewChild("li") li: ElementRef;
  isActive = false;
  @Output() onActivate: EventEmitter<this> = new EventEmitter();
  @Output() onDeactivate: EventEmitter<this> = new EventEmitter();
  commonActivate: () => void;
  commonDeactivate: () => void;

  activate() {
    this.commonActivate();
    if (this.containerComp && this.containerComp.flagComp) {
      this.containerComp.flagComp.moveTo(this.li.nativeElement.offsetLeft);
      this.containerComp.flagComp.setWidth(this.li.nativeElement.offsetWidth);
    }
  }

  deactivate() {
    this.commonDeactivate();
  }

  @HostListener("click")
  onclick() {
    if (this.containerComp) {
      this.containerComp.childComps.forEach(comp => {
        if (comp == this) comp.activate();
        else comp.deactivate();
      });
    }
  }

  ngOnInit() {
    this.containerComp.addChildComp(this);
  }

  ngOnDestroy() {
    this.containerComp.removeChildComp(this);
  }
}
applyMixins(NgPopTabItemComponent, [Activatable]);
