import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
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
    NgPopTabFlagComponent
  ],
  imports: [CommonModule, RouterModule, BrowserAnimationsModule],
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
    NgPopTabFlagComponent
  ],
  providers: [PageModeService]
})
export class NgPoppinsModule {}
