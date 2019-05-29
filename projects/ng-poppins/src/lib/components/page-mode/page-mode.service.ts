import { Injectable } from "@angular/core";
import { _addEventListener, _removeEventListener } from "../../utils";
import { checkIsPcSize } from "../../utils";
@Injectable()
export class PageModeService {
  constructor() {
    let self = this;
    this.pageModeInit();
    this.resize_eventListener_funcWrapper = function() {
      self.windowResize();
    };
    _addEventListener.call(
      this,
      window,
      "resize",
      this.resize_eventListener_funcWrapper,
      this
    );
  }
  largeModeWidth = "250px";
  miniModeWidth = "50px";
  winW = window.innerWidth;
  width = "0px";
  pageMode = PAGE_MODE_LARGE;
  resizeFlag;
  resize_eventListener_funcWrapper;
  windowResize() {
    clearTimeout(this.resizeFlag);
    this.resizeFlag = setTimeout(() => {
      let windowWidth_New = window.innerWidth;
      if (windowWidth_New != this.winW) this.pageModeInit();
    }, 200);
  }
  pageModeSwitch() {
    if (!checkIsPcSize()) {
      if (this.width == "0px") {
        this.width = this.miniModeWidth;
      } else {
        this.width = "0px";
      }
    } else {
      if (this.pageMode == PAGE_MODE_LARGE) {
        this.pageMode = PAGE_MODE_SMALL;
        this.width = this.miniModeWidth;
      } else {
        this.pageMode = PAGE_MODE_LARGE;
        this.width = this.largeModeWidth;
      }
    }
  }
  pageModeInit() {
    this.winW = window.innerWidth;
    if (checkIsPcSize()) {
      this.width = this.largeModeWidth;
      this.pageMode = PAGE_MODE_LARGE;
    } else {
      this.width = this.miniModeWidth;
      this.pageMode = PAGE_MODE_SMALL;
    }
  }
  ngOnDestroy() {
    if (this.resize_eventListener_funcWrapper)
      _removeEventListener(
        window,
        "resize",
        this.resize_eventListener_funcWrapper
      );
  }
}

export const PAGE_MODE_LARGE = "PAGE_MODE_LARGE";
export const PAGE_MODE_SMALL = "PAGE_MODE_SMALL";
