import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { NgPopTabsetComponent } from "../tabset.component";
import { applyMixins } from "../../comp-utils";
import { ChildComponent } from '../../base';

@Component({
  selector: "ng-pop-tab-item",
  templateUrl: "./tab-item.component.html",
  styleUrls: ["./tab-item.component.css"]
})
export class NgPopTabItemComponent extends ChildComponent
  implements OnInit, OnDestroy {
  constructor(
    public containerComp: NgPopTabsetComponent,
    public elementRef: ElementRef
  ) {
    super();
  }
  @ViewChild("li") li: ElementRef;

  set isActive(val) {
    if(val) {
      if (this.isDisabled) return ;
      this.commonActivate();
      if (this.containerComp && this.containerComp.flagComp) {
        this.containerComp.flagComp.moveTo(this.li.nativeElement.offsetLeft);
        this.containerComp.flagComp.setWidth(this.li.nativeElement.offsetWidth);
      }
    } else {
      this.commonDeactivate();
    }
    
    
  }

  deactivate() {
    
  }

  @HostListener("click")
  onclick() {
    if (this.containerComp) {
      this.containerComp.childComps.forEach(comp => {
        if (comp == this) comp.isActive = true;
        else comp.isActive = false;
      });
    }
  }

  onDestroy() {
    
  }

  ngOnInit() {
    this.containerComp.addChildComp(this);
  }

  ngOnDestroy() {
    this.containerComp.removeChildComp(this);
  }
}
