import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import
{
  NgPopSidebarSmallComponent,
  NgPopSidebarLargeComponent,
  NgPopSidebarComponent
} from "./components/sidebar";
import {PageModeService} from "./components/page-mode";
import {NgPopLogoComponent} from "./components/logo";
import
{
  NgPopHeaderNavComponent,
  NgPopHeaderNavItemComponent
} from "./components/header-nav";
import {NgPopBreadcrumbComponent} from "./components/breadcrumb";
import {NgPopCarouselComponent} from "./components/carousel/carousel.component";
import {NgPopCarouselItemComponent} from "./components/carousel/carousel-item/carousel-item.component";
import {NgPopTabsetComponent} from "./components/tabset/tabset.component";
import {NgPopTabNavItemComponent} from "./components/tabset/tab-nav-item/tab-nav-item.component";
import {NgPopTabFlagComponent} from "./components/tabset/tab-flag/tab-flag.component";
import {NgPopSelectComponent} from './components/select/select.component';
import {NgPopSelectIconComponent} from './components/select/select-icon/select-icon.component';
import {NgPopSelectDefaultComponent} from './components/select/select-default/select-default.component';
import {NgPopSelectDropdownComponent} from './components/select/select-dropdown/select-dropdown.component';
import {NgPopSelectDropdownItemComponent} from './components/select/select-dropdown-item/select-dropdown-item.component';
import {NgPopSelectService} from './components/select/select.service';
import {NgPopSelectInputComponent} from './components/select/select-input/select-input.component';
import {NgPopTabContentItemComponent} from './components/tabset/tab-content-item/tab-content-item.component';
import {NgPopTableSuiteComponent} from './components/table-suite/table-suite.component';
import {NgPopTableComponent} from './components/table-suite/table/table.component';
import {NgPopTableSuitePageComponent} from './components/table-suite/page/page.component';
import {NgPopTableSuitePageItemComponent} from './components/table-suite/page/page-item/page-item.component';
import {NgPopBtnGroupComponent} from './components/btn-group/btn-group.component';
import {NgPopBtnGroupDefaultItemComponent} from './components/btn-group/btn-group-default-item/btn-group-default-item.component';
import {NgPopBtnGroupDropdownComponent} from './components/btn-group/btn-group-dropdown/btn-group-dropdown.component';
import {NgPopBtnGroupDropdownItemComponent} from './components/btn-group/btn-group-dropdown-item/btn-group-dropdown-item.component';
import {NgPopBtnGroupArrowComponent} from './components/btn-group/btn-group-arrow/btn-group-arrow.component';
import {NgPopImageLoadErrorHandlerDirective} from './components/image-load-handler/image-load-error-handler.directive';
import {NgPopImageSrcEmptyHandlerDirective} from './components/image-load-handler/image-src-empty-handler.directive';
import {NgPopBtnGroupService} from './components/btn-group/btn-group.service';
import {NgPopCheckboxComponent} from './components/checkbox/checkbox.component';
import {NgPopCheckBoxService} from './components/checkbox/checkbox.service';
import {NgPopPopoutComponent} from './components/popout/popout.component';
import {NgPopPopoutService} from './components/popout/popout.service';


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
    NgPopTableSuiteComponent,
    NgPopTableComponent,
    NgPopTableSuitePageComponent,
    NgPopTableSuitePageItemComponent,
    NgPopBtnGroupComponent,
    NgPopBtnGroupDefaultItemComponent,
    NgPopBtnGroupDropdownComponent,
    NgPopBtnGroupDropdownItemComponent,
    NgPopBtnGroupArrowComponent,
    NgPopImageLoadErrorHandlerDirective,
    NgPopImageSrcEmptyHandlerDirective,
    NgPopCheckboxComponent,
    NgPopPopoutComponent,
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
    NgPopTableSuiteComponent,
    NgPopTableComponent,
    NgPopTableSuitePageComponent,
    NgPopBtnGroupArrowComponent,
    NgPopBtnGroupComponent,
    NgPopBtnGroupDefaultItemComponent,
    NgPopBtnGroupDropdownComponent,
    NgPopBtnGroupDropdownItemComponent,
    NgPopCheckboxComponent,
    NgPopPopoutComponent
  ],
  providers: [PageModeService, NgPopSelectService, NgPopBtnGroupService, NgPopCheckBoxService, NgPopPopoutService]
})
export class NgPoppinsModule {}
