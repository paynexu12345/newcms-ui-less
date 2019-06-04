import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from './class';
import { slideDownFactory, fadeInFactory, fadeInDownFactory } from '../../animations';
import { CSS_CLASS_NAME_PREFIX } from '../comp-utils';
import { slideInDownFactory } from '../../animations/slide-in-down.factory';

const slideDown = slideDownFactory( 'slideDown', '.1s ease-out' );
const fadeIn = fadeInFactory();
const fadeInDown = fadeInDownFactory();
const slideInDown = slideInDownFactory();
@Component( {
  animations: [fadeIn, slideDown, fadeInDown, slideInDown],
  selector: 'ng-pop-sidebar-lg',
  templateUrl: './sidebar-large.component.html'
} )
export class NgPopSidebarLargeComponent implements OnInit
{
  constructor (
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public elementRef: ElementRef,
    public renderer: Renderer
  ) { }
  window = window;
  CSS_CLASS_NAME_PREFIX = CSS_CLASS_NAME_PREFIX;
  @Input() menus: Menu[] = [];
  clickFirstMenu ( e, targetMenu: Menu )
  {
    e.preventDefault();
    if ( targetMenu.url )
    {
      this.router.navigateByUrl( targetMenu.url );
      return;
    }
    this.menus.forEach( menu =>
    {
      if ( menu !== targetMenu )
      {
        menu.isOpen = false;
      }
    } );
    targetMenu.isOpen = !targetMenu.isOpen;
  }
  clickSecondMenu ( e, targetMenu, secondMenu )
  {
    e.preventDefault();
    if ( secondMenu.url )
    {
      // targetMenu.isActive = true;
      this.router.navigateByUrl( secondMenu.url );
    }
  }
  ngOnInit ()
  {
    this.menus.forEach( menu =>
    {
      if ( menu.isActive )
      {
        menu.isOpen = true;
      } else
      {
        menu.isOpen = false;
      }
    } );
  }
}
