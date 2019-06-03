import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NgPopSidebarSmallComponent,
  NgPopSidebarLargeComponent,
  NgPopSidebarComponent
} from "./components/sidebar";
import { PageModeService } from "./components/page-mode";
import { NgPopLogoComponent } from "./components/logo";
import {
  NgPopHeaderNavComponent,
  NgPopHeaderNavItemComponent
} from "./components/header-nav";
import { NgPopBreadcrumbComponent } from "./components/breadcrumb";
import { NgPopCarouselComponent } from "./components/carousel/carousel.component";
import { NgPopCarouselItemComponent } from "./components/carousel/carousel-item/carousel-item.component";
import { NgPopTabsetComponent } from "./components/tabset/tabset.component";
import { NgPopTabNavItemComponent } from "./components/tabset/tab-nav-item/tab-nav-item.component";
import { NgPopTabFlagComponent } from "./components/tabset/tab-flag/tab-flag.component";
import { NgPopSelectComponent } from './components/select/select.component';
import { NgPopSelectIconComponent } from './components/select/select-icon/select-icon.component';
import { NgPopSelectDefaultComponent } from './components/select/select-default/select-default.component';
import { NgPopSelectDropdownComponent } from './components/select/select-dropdown/select-dropdown.component';
import { NgPopSelectDropdownItemComponent } from './components/select/select-dropdown-item/select-dropdown-item.component';
import { NgPopSelectService } from './components/select/select.service';
import { NgPopSelectInputComponent } from './components/select/select-input/select-input.component';
import { NgPopPopupLayerComponent } from './components/popup-layer/popup-layer.component';
import { NgPopTabContentItemComponent } from './components/tabset/tab-content-item/tab-content-item.component';
import { TableSuiteComponent } from './components/table-suite/table-suite.component';
import { TableComponent } from './components/table-suite/table/table.component';
import { PageComponent } from './components/table-suite/page/page.component';
import { NgPopBtnGroupComponent } from './components/btn-group/btn-group.component';
import { NgPopBtnGroupDefaultItemComponent } from './components/btn-group/btn-group-default-item/btn-group-default-item.component';
import { NgPopBtnGroupDropdownComponent } from './components/btn-group/btn-group-dropdown/btn-group-dropdown.component';
import { NgPopBtnGroupDropdownItemComponent } from './components/btn-group/btn-group-dropdown-item/btn-group-dropdown-item.component';
import { NgPopBtnGroupArrowComponent } from './components/btn-group/btn-group-arrow/btn-group-arrow.component';

@NgModule({
  declarations: [
    NgPopSidebarSmallComponent,
    NgPopSidebarLargeComponent,
    NgPopSidebarComponent,
    NgPopLogoComponent,
    NgPopHeaderNavComponent,
    NgPopHeaderNavItemComponent,
    NgPopBreadcrumbComponent,
    NgPopCarouselComponent,
    NgPopCarouselItemComponent,
    NgPopTabsetComponent,
    NgPopTabNavItemComponent,
    NgPopTabFlagComponent,
    NgPopTabContentItemComponent,
    NgPopSelectComponent,
    NgPopSelectIconComponent,
    NgPopSelectDefaultComponent,
    NgPopSelectDropdownComponent,
    NgPopSelectDropdownItemComponent,
    NgPopSelectInputComponent,
    NgPopPopupLayerComponent,
    TableSuiteComponent,
    TableComponent,
    PageComponent,
    NgPopBtnGroupComponent,
    NgPopBtnGroupDefaultItemComponent,
    NgPopBtnGroupDropdownComponent,
    NgPopBtnGroupDropdownItemComponent,
    NgPopBtnGroupArrowComponent
  ],
  imports: [CommonModule, RouterModule, BrowserAnimationsModule, FormsModule],
  exports: [
    NgPopSidebarSmallComponent,
    NgPopSidebarLargeComponent,
    NgPopSidebarComponent,
    NgPopLogoComponent,
    NgPopHeaderNavComponent,
    NgPopHeaderNavItemComponent,
    NgPopBreadcrumbComponent,
    NgPopCarouselComponent,
    NgPopCarouselItemComponent,
    NgPopTabsetComponent,
    NgPopTabNavItemComponent,
    NgPopTabFlagComponent,
    NgPopTabContentItemComponent,
    NgPopSelectComponent,
    NgPopSelectComponent,
    NgPopSelectIconComponent,
    NgPopSelectDefaultComponent,
    NgPopSelectDropdownComponent,
    NgPopSelectDropdownItemComponent,
    NgPopSelectInputComponent,
    NgPopPopupLayerComponent,
    TableSuiteComponent,
    TableComponent,
    PageComponent,
    NgPopBtnGroupComponent,
    NgPopBtnGroupDefaultItemComponent,
    NgPopBtnGroupDropdownComponent,
    NgPopBtnGroupDropdownItemComponent,
    NgPopBtnGroupArrowComponent
  ],
  providers: [PageModeService, NgPopSelectService]
})
export class NgPoppinsModule { }
