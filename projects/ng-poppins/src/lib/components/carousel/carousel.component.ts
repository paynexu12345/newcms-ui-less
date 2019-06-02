import { Component, OnInit, Input } from "@angular/core";
import { NgPopCarouselItemComponent } from "./carousel-item/carousel-item.component";
import { CarouselConfig, DEFAULT_CAROUSEL_CONFIG } from "./class";
import { commonInitCfg, applyMixins } from "../comp-utils";
import { ContainerComponent } from '../base';

@Component({
  selector: "ng-pop-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class NgPopCarouselComponent extends ContainerComponent<NgPopCarouselItemComponent>
  implements OnInit {
  constructor() {
    super()
  }
  stageWidth = 0;
  stageHeight = 0;
  translateX = 0;
  autoPlayIntervalId = null;
  childComps: NgPopCarouselItemComponent[] = [];
  rootCssClass = "ng-pop-carousel";
  config: CarouselConfig = DEFAULT_CAROUSEL_CONFIG;
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
    this.init();
  }

  commonAddChildComp: (comp: NgPopCarouselItemComponent) => void;
  commonRemoveChildComp: (comp: NgPopCarouselItemComponent) => void;
  addChildComp(comp: NgPopCarouselItemComponent) {
    this.commonAddChildComp(comp);
  };
  removeChildComp(comp: NgPopCarouselItemComponent) {
    this.commonRemoveChildComp(comp);
  };

  setStageSize(cfg: CarouselConfig) {
    this.stageWidth = cfg.width;
    this.stageHeight = cfg.height;
  }

  showItem(i: number) {
    if (i >= 0 && i < this.childComps.length) {
      this.translateX = -i * this.stageWidth;
    }
    this.childComps.forEach((c, j) => {
      if (i == j) c.isActive = true;
      else c.isActive = false;
    });
  }

  showPrevItem() {
    if (this.config.activeIndex > 0) this.config.activeIndex--;
    else this.config.activeIndex = this.childComps.length - 1;
    this.showItem(this.config.activeIndex);
  }

  showNextItem() {
    if (this.config.activeIndex < this.childComps.length - 1)
      this.config.activeIndex++;
    else this.config.activeIndex = 0;
    this.showItem(this.config.activeIndex);
  }
  stopAutoPlay() {
    if (this.autoPlayIntervalId) clearInterval(this.autoPlayIntervalId);
  }

  init() {
    if (!this.stageHeight) {
      this.setStageSize(this.config);
      setTimeout(() => {
        this.showItem(this.config.activeIndex);
      }, 0);
      if (this.config.autoPlay && !this.autoPlayIntervalId)
        this.autoPlayIntervalId = setInterval(() => {
          this.showNextItem();
        }, this.config.autoPlayInterval);
    }
  }

  ngOnInit() {
    this.init();
  }
}