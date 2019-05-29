import {
  Component,
  OnInit,
  Input,
  Output,
  ElementRef,
  EventEmitter
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from './class';
import { slideLeftFactory, slideDownFactory } from '../../animations';
import { CSS_CLASS_NAME_PREFIX } from '../comp-utils';
const slideLeft = slideLeftFactory();
const slideLeft2 = slideLeftFactory('slideLeft2', '.3s ease-in-out', '-20px');
const slideDown = slideDownFactory('slideDown', '.5s 0.9s ease-in-out');
@Component({
  animations: [slideLeft, slideLeft2, slideDown],
  selector: 'ng-pop-sidebar-sm',
  templateUrl: './sidebar-small.component.html'
})
export class NgPopSidebarSmallComponent implements OnInit {
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public elementRef: ElementRef
  ) {}
  window = window;
  CSS_CLASS_NAME_PREFIX = CSS_CLASS_NAME_PREFIX;
  @Input() menus: Menu[];
  @Output() ev = new EventEmitter();
  @Input() width = '50px';
  clickSecondMenu(e, firstMenu, secondMenu) {
    e.preventDefault();
    if (secondMenu.url) {
      firstMenu.isActive = true;
      this.router.navigateByUrl(secondMenu.url);
      this.hideSecondMenu(firstMenu);
    }
  }
  clickFirstMenu(e, firstMenu: Menu) {
    e.preventDefault();
    if (firstMenu.url) {
      this.router.navigateByUrl(firstMenu.url);
    }
  }
  showSecondMenu(menu: Menu) {
    clearTimeout((menu as any).hideFlag);
    (menu as any).showFlag = setTimeout(() => {
      if (menu.children) { (menu.children as any).isShow = true; }
    }, 200);
  }
  hideSecondMenu(menu: Menu) {
    clearTimeout((menu as any).showFlag);
    (menu as any).hideFlag = setTimeout(() => {
      if (menu.children) { (menu.children as any).isShow = false; }
    }, 200);
  }
  ngOnInit() {
    this.menus.forEach(menu => {
      if (menu.children) {
        (menu.children as any).isShow = false;
      }
    });
  }
}
