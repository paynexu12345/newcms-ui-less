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
import { NgPopTabItemComponent } from "./components/tabset/tab-item/tab-item.component";
import { NgPopTabFlagComponent } from "./components/tabset/tab-flag/tab-flag.component";
import { NgPopSelectComponent } from './components/select/select.component';
import { NgPopSelectIconComponent } from './components/select/select-icon/select-icon.component';
import { NgPopSelectDefaultComponent } from './components/select/select-default/select-default.component';
import { NgPopSelectDropdownComponent } from './components/select/select-dropdown/select-dropdown.component';
import { NgPopSelectDropdownItemComponent } from './components/select/select-dropdown-item/select-dropdown-item.component';
import { NgPopSelectService } from './components/select/select.service';
import { NgPopSelectInputComponent } from './components/select/select-input/select-input.component';

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
    NgPopTabItemComponent,
    NgPopTabFlagComponent,
    NgPopSelectComponent,
    NgPopSelectIconComponent,
    NgPopSelectDefaultComponent,
    NgPopSelectDropdownComponent,
    NgPopSelectDropdownItemComponent,
    NgPopSelectInputComponent
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
    NgPopTabItemComponent,
    NgPopTabFlagComponent,
    NgPopSelectComponent,
    NgPopSelectComponent,
    NgPopSelectIconComponent,
    NgPopSelectDefaultComponent,
    NgPopSelectDropdownComponent,
    NgPopSelectDropdownItemComponent,
    NgPopSelectInputComponent
  ],
  providers: [PageModeService, NgPopSelectService]
})
export class NgPoppinsModule { }
