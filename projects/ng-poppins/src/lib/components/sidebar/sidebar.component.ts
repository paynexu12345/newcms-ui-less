import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Menu, SideBarConfig, DEFAULT_SIDEBAR_CONFIG } from "./class";
import { hightlightMenuByRouter } from "./highlightMenu.func";
import {
  PageModeService,
  PAGE_MODE_SMALL,
  PAGE_MODE_LARGE
} from '../page-mode';
import { commonInitCfg, CSS_CLASS_NAME_PREFIX } from '../comp-utils';
import { ContainerComponent } from '../base';
@Component({
  selector: 'ng-pop-sidebar',
  templateUrl: './sidebar.component.html'
})
export class NgPopSidebarComponent implements OnInit {
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public elementRef: ElementRef,
    public pageModeService: PageModeService
  ) { 
    //super();
  }
  PAGE_MODE_LARGE = PAGE_MODE_LARGE;
  PAGE_MODE_SMALL = PAGE_MODE_SMALL;
  config: SideBarConfig = DEFAULT_SIDEBAR_CONFIG;
  rootCssClass = CSS_CLASS_NAME_PREFIX + 'sidebar';
  reservedCssClasses: string[] = [];
  @Input('config')
  set _config(val) {
    commonInitCfg(this, val);
  }
  get _config() {
    return this.config;
  }
  ngOnInit() {
    hightlightMenuByRouter(this.router, this.config.menus);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        hightlightMenuByRouter(this.router, this.config.menus);
      }
    });
  }
}
