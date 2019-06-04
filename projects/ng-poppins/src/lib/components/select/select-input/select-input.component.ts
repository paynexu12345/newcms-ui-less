import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {SearchInputComponent} from '../../base';
import {KEY_DOWN, KEY_ENTER, KEY_ESC, KEY_UP} from '../../comp-utils';
import {NgPopSelectComponent} from '../select.component';

@Component({
  selector: 'ng-pop-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.less']
})
export class NgPopSelectInputComponent extends SearchInputComponent implements OnInit, OnDestroy
{
  constructor(public containerComp: NgPopSelectComponent)
  {
    super();
  }
  onkeydown($event)
  {
    if($event.keyCode == KEY_UP)
    {
      for(let i = 0, len = this.containerComp.mainSubComps.length; i < len; i++)
      {
        if(this.containerComp.mainSubComps[i].isActive)
        {
          const prev = this.findPrevNotDisabled(this.containerComp.mainSubComps, i);
          if(prev)
          {
            prev.isActive = true;
            this.containerComp.mainSubComps[i].isActive = false;
          }
          break;
        }
      }
      this.pressUpKey.emit();
    }
    if($event.keyCode == KEY_DOWN)
    {
      for(let i = 0, len = this.containerComp.mainSubComps.length; i < len; i++)
      {
        if(this.containerComp.mainSubComps[i].isActive)
        {
          const next = this.findNextNotDisabled(this.containerComp.mainSubComps, i);
          if(next)
          {
            next.isActive = true;
            this.containerComp.mainSubComps[i].isActive = false;
          }
          break;
        }
      }
      this.pressDownKey.emit();
    }
    if($event.keyCode == KEY_ENTER)
    {
      this.containerComp.mainSubComps.forEach(child =>
      {
        if(child.isActive)
        {
          this.containerComp.activeItem = child.item;
          child.item.isActive = true;
        } else
        {
          child.item.isActive = false;
        }
      });
      this.containerComp.isActive = false;
      this.pressEnterKey.emit();
    }
    if($event.keyCode == KEY_ESC)
    {
      this.containerComp.isActive = false;
      this.pressEscKey.emit();
    }
    this.commonFilterKeydown($event);
  }

  @HostListener("click", ["$event"])
  onclick($event)
  {
    $event.stopPropagation();
  }

  ngOnInit()
  {
    this.containerComp.inputComp = this;
    setTimeout(() =>
    {
      this.placeholder = this.containerComp.activeItem[this.containerComp.config.textKey];
      this.elementRef.nativeElement.focus();
    }, 0);
  }

  ngOnDestroy()
  {
    this.containerComp.inputComp = null;
  }

}
