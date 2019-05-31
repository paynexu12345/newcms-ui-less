import { Component, OnInit, EventEmitter, Output, ElementRef, HostListener, ViewChild, OnDestroy } from '@angular/core';
import { ChildComponent } from '../../interfaces';
import { NgPopSelectComponent } from '../select.component';
import { commonRegisterComponent, commonCancelComponent } from '../../comp-utils';

@Component({
  selector: 'ng-pop-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.less']
})
export class NgPopSelectInputComponent implements OnInit, OnDestroy, ChildComponent {
  constructor(public containerComp: NgPopSelectComponent) { }
  placeholder = "";
  searchText = "";
  searchFlag = null;
  @Output() onSearch = new EventEmitter();
  @ViewChild("elementRef") elementRef: ElementRef;
  onkeyup($event) {
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

  ngOnDestroy(): void {
    commonCancelComponent(this.containerComp, "inputComp");
  }

}
