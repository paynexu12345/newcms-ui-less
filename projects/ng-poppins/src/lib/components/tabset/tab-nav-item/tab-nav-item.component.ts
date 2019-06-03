import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
  OnDestroy,
  Input
} from "@angular/core";
import { NgPopTabsetComponent } from "../tabset.component";
import { MainSubComponent } from "../../base";
import { NgPopTabItem } from "../class";

@Component({
  selector: "ng-pop-tab-nav-item",
  templateUrl: "./tab-nav-item.component.html",
  styleUrls: ["./tab-nav-item.component.css"]
})
export class NgPopTabNavItemComponent extends MainSubComponent<NgPopTabItem>
  implements OnInit, OnDestroy {
  constructor(
    public containerComp: NgPopTabsetComponent,
    public elementRef: ElementRef
  ) {
    super();
  }
  @ViewChild("li") li: ElementRef;
  @Input("item")
  set item(val) {
    if (val) {
      this._item = val;
      this.isActive = this._item.isActive;
      this.isDisabled = this._item.isDisabled;
    }
  }
  get item() {
    return this._item;
  }
  set isActive(val) {
    if (this.isDisabled) return;
    if (val) {
      setTimeout(() => {
        if (this.containerComp && this.containerComp.flagComp) {
          this.containerComp.flagComp.moveTo(this.li.nativeElement.offsetLeft);
          this.containerComp.flagComp.setWidth(
            this.li.nativeElement.offsetWidth
          );
        }
      }, 0);
      this.commonActivate();
    } else {
      this.commonDeactivate();
    }
  }
  get isActive() {
    return this._isActive;
  }

  @HostListener("click")
  onclick() {
    if (this.isDisabled) return;
    if (this.containerComp) {
      this.containerComp.mainSubComps.forEach(comp => {
        if (comp != this) {
          comp.isActive = false;
        } else {
          comp.isActive = true;
        }
      });
      this.containerComp.contentComps.forEach(comp => {
        if (comp.item != this.item) {
          comp.isActive = false;
        } else {
          comp.isActive = true;
        }
      });
    }
  }

  ngOnInit() {
    this.containerComp.addMainSubComp(this);
  }

  ngOnDestroy() {
    this.containerComp.removeMainSubComp(this);
  }
}
