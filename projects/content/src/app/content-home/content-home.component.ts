import { Component, OnInit } from '@angular/core';
import { Layout1Config } from '../layout/layout.class';
import { geneNavConfig } from '../header/generateActiveNavItem';
import { NAVITEM_ID_CONTENT } from 'src/app-config';
import { PageModeService, NgPopSelectConfig, DEFAULT_NGPOP_SELECT_CONFIG } from 'projects/ng-poppins/src/public-api';
import { BreadcrumbConfig } from 'projects/ng-poppins/src/lib/components/breadcrumb';
import { MENUS_CONTENT } from '../../content-config';
// import { CmsLayout1Config } from 'project-shared/layout/layout.class';
// import { generateActiveNavItem } from 'project-shared/components/cms-header/cms-header-nav/generateActiveNavItem';
// import { ID_CONTENT, FROM_INDEX } from 'project-shared/constant';
// import { PageModeService } from 'projects/ngx-cms-common/src/public-api';
// import { CMS_MENUS } from '../../config';
// import { CmsBreadcrumb } from 'projects/ngx-cms-common/src/lib/controls/cms-breadcrumb/cms-breadcrumb';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styles:[`
    ./content-home.component.less
  `]
})
export class ContentHomeComponent implements OnInit {

  constructor(public pageModeService:PageModeService) { }
  breadcrumbConfig:BreadcrumbConfig = {
    items:[
      {
        name:"Content",
        routerLink:"/content/home",
        queryParams:{
          param1:"hh",
          param2:"gg"
        }
      },
      {
        name:"Content"
      }
    ]
  };
  cmsLayout1Config:Layout1Config = {
    header: {
      nav: geneNavConfig(NAVITEM_ID_CONTENT)
    },
    sidebar: {
      menus: MENUS_CONTENT,
      cssClasses:["c1"]
    }
  }
  selectConfig:NgPopSelectConfig = DEFAULT_NGPOP_SELECT_CONFIG;
  ngOnInit() {
  }

}
