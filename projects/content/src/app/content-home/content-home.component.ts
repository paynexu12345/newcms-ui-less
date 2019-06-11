import {Component, OnInit} from "@angular/core";
import {Layout1Config} from "../layout/layout.class";
import {geneNavConfig} from "../header/generateActiveNavItem";
import {NAVITEM_ID_CONTENT} from "src/app-config";
import
{
  PageModeService,
  NgPopSelectConfig,
  EXAMPLE_SELECT_CONFIG
} from "projects/ng-poppins/src/public-api";
import {BreadcrumbConfig} from "projects/ng-poppins/src/lib/components/breadcrumb";
import {MENUS_CONTENT} from "../../content-config";
import
{
  NgPopTabConfig,
  EXAMPLE_TAB_CONFIG
} from "projects/ng-poppins/src/lib/components/tabset";
import
{
  NgPopBtnGroupConfig,
  EXAMPLE_BTN_GROUP_CONFIG
} from "projects/ng-poppins/src/lib/components/btn-group/class";
import {EXAMPLE_TABLE_SUITE_CONFIG, EXAMPLE_TABLE_DATA} from 'projects/ng-poppins/src/lib/components/table-suite/class';
import {NgPopPopoutService} from 'projects/ng-poppins/src/lib/components/popout/popout.service';
// import { CmsLayout1Config } from 'project-shared/layout/layout.class';
// import { generateActiveNavItem } from 'project-shared/components/cms-header/cms-header-nav/generateActiveNavItem';
// import { ID_CONTENT, FROM_INDEX } from 'project-shared/constant';
// import { PageModeService } from 'projects/ngx-cms-common/src/public-api';
// import { CMS_MENUS } from '../../config';
// import { CmsBreadcrumb } from 'projects/ngx-cms-common/src/lib/controls/cms-breadcrumb/cms-breadcrumb';

@Component({
  selector: "app-content-home",
  templateUrl: "./content-home.component.html",
  styleUrls: ["./content-home.component.less"]
})
export class ContentHomeComponent implements OnInit
{
  constructor(public pageModeService: PageModeService, public popoutService: NgPopPopoutService) {}
  breadcrumbConfig: BreadcrumbConfig = {
    items: [
      {
        name: "Content",
        routerLink: "/content/home",
        queryParams: {
          param1: "hh",
          param2: "gg"
        }
      },
      {
        name: "Content"
      }
    ]
  };
  cmsLayout1Config: Layout1Config = {
    header: {
      nav: geneNavConfig(NAVITEM_ID_CONTENT)
    },
    sidebar: {
      menus: MENUS_CONTENT,
      cssClasses: ["c1"]
    }
  };
  selectConfig: NgPopSelectConfig = EXAMPLE_SELECT_CONFIG;
  // selectConfig2: NgPopSelectConfig = Object.assign({},EXAMPLE_SELECT_CONFIG,{cssClasses:["white"]}) ;
  selectConfig2: NgPopSelectConfig = {
    width: "160px",
    items: [
      {
        id: 1,
        name: "Content Provider",
        isActive: false,
        disabled: true
      },
      {
        id: 2,
        name: "Content Provider2",
        isActive: true
      }
    ],
    textKey: "name",
    idKey: "id",
    cssClasses: ["white"],
    isDisabled: true
  };
  tabConfig1: NgPopTabConfig = Object.assign({}, EXAMPLE_TAB_CONFIG);
  btnGroupConfig: NgPopBtnGroupConfig = Object.assign(
    {},
    EXAMPLE_BTN_GROUP_CONFIG
  );
  tableSuiteConfig = EXAMPLE_TABLE_SUITE_CONFIG;
  tableSuiteData = EXAMPLE_TABLE_DATA;
  test1PopoutId = null;
  onTabItemActivate()
  {
    //  alert(1);
  }
  clickBtn($event)
  {
    alert($event.id);
  }
  showPopout(id)
  {
    this.popoutService.show(id);
  }
  ngOnInit() {}
}
