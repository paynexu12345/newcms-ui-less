import { Component, OnInit, EventEmitter, Output, ElementRef, HostListener, ViewChild, OnDestroy } from '@angular/core';
import { NgPopSelectComponent } from '../select.component';
import { commonRegisterComponent, commonCancelComponent, KEY_UP, KEY_DOWN, KEY_ENTER, KEY_ESC } from '../../comp-utils';
import { ChildComponent, BaseComponent } from '../../base';

@Component({
  selector: 'ng-pop-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.less']
})
export class NgPopSelectInputComponent extends ChildComponent implements OnInit, OnDestroy {
  constructor(public containerComp: NgPopSelectComponent) {
    super();
  }
  placeholder = "";
  searchText = "";
  searchFlag = null;
  @Output() onSearch = new EventEmitter();
  @Output() onPressUpKey = new EventEmitter();
  @Output() onPressDownKey = new EventEmitter();
  @Output() onPressEnterKey = new EventEmitter();
  @Output() onPressEscKey = new EventEmitter();
  @ViewChild("elementRef") elementRef: ElementRef;
  findPrevNotDisabled<T extends BaseComponent>(arr: T[], from: number): T | null {
    if (arr[from - 1]) {
      if (arr[from - 1].isDisabled) {
        return this.findPrevNotDisabled(arr, from - 1);
      } else {
        return arr[from - 1];
      }
    } else {
      return null;
    }
  }
  findNextNotDisabled<T extends BaseComponent>(arr: T[], from: number): T | null {
    if (arr[from + 1]) {
      if (arr[from + 1].isDisabled) {
        return this.findNextNotDisabled(arr, from + 1);
      } else {
        return arr[from + 1];
      }
    } else {
      return null;
    }
  }
  onkeydown($event) {
    console.log($event.keyCode);
    if ($event.keyCode == KEY_UP) {
      for (let i = 0, len = this.containerComp.childComps.length; i < len; i++) {
        if (this.containerComp.childComps[i].isActive) {
          const prev = this.findPrevNotDisabled(this.containerComp.childComps, i);
          if (prev) {
            prev.isActive = true;
            this.containerComp.childComps[i].isActive = false;
          }
          break;
        }
      }
      this.onPressUpKey.emit();
    }
    if ($event.keyCode == KEY_DOWN) {
      for (let i = 0, len = this.containerComp.childComps.length; i < len; i++) {
        if (this.containerComp.childComps[i].isActive) {
          const next = this.findNextNotDisabled(this.containerComp.childComps, i);
          if (next) {
            next.isActive = true;
            this.containerComp.childComps[i].isActive = false;
          }
          break;
        }
      }
      this.onPressDownKey.emit();
    }
    if ($event.keyCode == KEY_ENTER) {
      this.containerComp.childComps.forEach(child => {
        if (child.isActive) {
          this.containerComp.activeItem = child.item;
          child.item.isActive = true;
        } else {
          child.item.isActive = false;
        }
      });
      this.containerComp.isActive = false;
      this.onPressEnterKey.emit();
    }
    if ($event.keyCode == KEY_ESC) {
      this.containerComp.isActive = false;
      this.onPressEscKey.emit();
    }
    clearTimeout(this.searchFlag);
    this.searchFlag = setTimeout(() => {
      if ($event.keyCode != 27 &&
        $event.keyCode != 38 &&
        $event.keyCode != 40 &&
        $event.keyCode != 13 &&
        $event.keyCode != 37 &&
        $event.keyCode != 39) {
        this.onSearch.emit(this.searchText);
      }
    }, 300);
  }

  @HostListener("click", ["$event"])
  onclick($event) {
    $event.stopPropagation();
  }

  ngOnInit() {
    commonRegisterComponent(this.containerComp, "inputComp", this);
    setTimeout(() => {
      this.placeholder = this.containerComp.activeItem[this.containerComp.config.textKey];
      this.elementRef.nativeElement.focus();
    }, 0);
  }

  ngOnDestroy() {
    commonCancelComponent(this.containerComp, "inputComp");
  }

}
