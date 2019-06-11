import {EventEmitter, Output, Input, ElementRef, ViewChild, HostListener} from '@angular/core';
import {commonInitCfg, KEY_ESC, KEY_UP, KEY_DOWN, KEY_ENTER, _$} from './comp-utils';
declare var $;
export type PositionType = "downLeft" | "downRight" | "upLeft" | "upRight";
export const HEADER_HEIGHT = 80;
export abstract class Container<T> {
  mainSubComps: T[];
  commonAddMainSubComp: (child: T) => void;
  commonRemoveMainSubComp: (child: T) => void;
}
export interface Configurable
{
  readonly reservedCssClasses: string[];
  readonly rootCssClass: string;
  config: {[propName: string]: any};
  _config: {[propName: string]: any};
}
/**
 * BaseComponent is as its name ,delivery active/disable status and onactivate handler, if no special usage , all ng-pop components should extends BaseComponent or its derived  classes.
 */
export class BaseComponent
{
  timeStamp = new Date().getTime();
  protected _isDisabled = false;
  public get isDisabled()
  {
    return this._isDisabled;
  }
  public set isDisabled(value)
  {
    this._isDisabled = value;
  }
  protected _isActive = false;
  public get isActive()
  {
    return this._isActive;
  }
  public set isActive(value)
  {
    if(value)
    {
      this.commonActivate();
    } else
    {
      this.commonDeactivate();
    }

  }
  @Output() readonly activate = new EventEmitter();
  @Output() readonly deactivate = new EventEmitter();
  protected commonActivate()
  {
    if(this._isDisabled) return;
    if(!this._isActive)
    {
      this.activate.emit(this);
    }
    this._isActive = true;
  }

  protected commonDeactivate()
  {
    if(this._isDisabled) return;
    if(this._isActive)
    {
      this.deactivate.emit(this);
    }
    this._isActive = false;
  }
  protected commonSetDisabled(val)
  {
    if(val)
    {
      if('false' == val)
      {
        this._isDisabled = false;
      }
      else
      {
        this._isDisabled = true;
      }
    }
    else
    {
      this._isDisabled = false;
    }
  }
  findPrevNotDisabled<T extends BaseComponent>(arr: T[], from: number): T | null
  {
    if(arr[from - 1])
    {
      if(arr[from - 1].isDisabled)
      {
        return this.findPrevNotDisabled(arr, from - 1);
      } else
      {
        return arr[from - 1];
      }
    } else
    {
      return null;
    }
  }
  findNextNotDisabled<T extends BaseComponent>(arr: T[], from: number): T | null
  {
    if(arr[from + 1])
    {
      if(arr[from + 1].isDisabled)
      {
        return this.findNextNotDisabled(arr, from + 1);
      } else
      {
        return arr[from + 1];
      }
    } else
    {
      return null;
    }
  }
}
export class BaseService {}
/**
 * ContainerService is used to manage several components register.See NgPopSelectComponent for example.
 */
export class ContainerService<T> extends BaseService implements Container<T> {
  constructor()
  {
    super();
  }
  mainSubComps: T[] = [];
  commonAddMainSubComp(child: T)
  {
    this.mainSubComps.push(child);
  }
  commonRemoveMainSubComp(child: T)
  {
    this.mainSubComps.forEach((comp, index) =>
    {
      if(child == comp) this.mainSubComps.splice(index, 1);
    });
  }
  addMainSubComp(child: T, ...args)
  {
    this.commonAddMainSubComp(child);
  }
  removeMainSubComp(child: T, ...args)
  {
    this.commonRemoveMainSubComp(child);
  }
}
/**
 * ContainerComponent is always the root component of a UI plugin( but sometimes would be insert into other plugins ), and its sub components should register themself in this component.After that , ContainerComponent would become the bridge of communication between its sub components. And the ContainerComponent keeps a special component arrays to refer to its main sub component.
 * @example
 * `header-nav
 *    header-nav-item
 *    header-nav-item
 *    other-component..
 * the header-nav is the ContainerComponent ,header-nav-item is the main sub component.`
 */
export class ContainerComponent<T> extends BaseComponent implements Configurable, Container<T> {
  constructor()
  {
    super();
  }
  reservedCssClasses = ["disabled", "active"];
  rootCssClass = "";
  mainSubComps: T[] = [];
  _config: {[propName: string]: any};

  @Input("config")
  set config(val)
  {
    commonInitCfg(this, val);
  }
  get config()
  {
    return this._config;
  }
  @HostListener("blur", ["$event"])
  onblur($event)
  {
    this.isActive = false;
  }

  commonAddMainSubComp(child: T)
  {
    this.mainSubComps.push(child);
  }
  commonRemoveMainSubComp(child: T)
  {
    this.mainSubComps.forEach((comp, index) =>
    {
      if(child == comp) this.mainSubComps.splice(index, 1);
    });
  }
  addMainSubComp(child: T, ...args)
  {
    this.commonAddMainSubComp(child);
  };
  removeMainSubComp(child: T, ...args)
  {
    this.commonRemoveMainSubComp(child);
  };
}
/**
 * The sub component of a ContainerComponent.
 */
export class SubComponent extends BaseComponent
{
  constructor()
  {
    super();
  }
  containerComp: {[propName: string]: any};
}
/**
 * The main sub component of a ContainerComponent.
 */
export class MainSubComponent<T> extends SubComponent
{
  constructor()
  {
    super();
  }
  containerComp: {[propName: string]: any};
  protected _item: T;
  item: T;
}
export class SearchInputComponent extends BaseComponent
{
  placeholder = "";
  searchText = "";
  searchFlag = null;
  @Output() readonly search = new EventEmitter();
  @Output() readonly pressUpKey = new EventEmitter();
  @Output() readonly pressDownKey = new EventEmitter();
  @Output() readonly pressEnterKey = new EventEmitter();
  @Output() readonly pressEscKey = new EventEmitter();
  @ViewChild("elementRef") elementRef: ElementRef;
  onkeydown($event)
  {
    this.commonFilterKeydown($event);
  }
  protected commonFilterKeydown($event)
  {
    clearTimeout(this.searchFlag);
    this.searchFlag = setTimeout(() =>
    {
      if($event.keyCode != KEY_ESC &&
        $event.keyCode != KEY_UP &&
        $event.keyCode != KEY_DOWN &&
        $event.keyCode != KEY_ENTER)
      {
        this.search.emit(this.searchText);
      }
    }, 300);
  }
}
export class PopupLayerComponent extends BaseComponent
{
  constructor()
  {
    super();
  }
  isVisible = false;
  direction: PositionType = "downLeft";
  maxHeight = "500px";
  @ViewChild("scrollElement") scrollElement: ElementRef;
  @ViewChild("element") element: ElementRef;
  protected setMaxHeight()
  {
    const pos = this.scrollElement.nativeElement.getBoundingClientRect();
    const winHeight = _$(window).height();
    if(this.direction == "downLeft" || this.direction == "downRight")
    {
      this.maxHeight = winHeight - pos.top - 20 + "px";
    } else
    {
      this.maxHeight = pos.top - HEADER_HEIGHT - 40 + "px";
    }
  }
  protected setPosition()
  {
    const pos = this.element.nativeElement.getBoundingClientRect();
    if(pos.left + this.element.nativeElement.offsetWidth > window.innerWidth)
    {
      if(
        pos.top + this.element.nativeElement.offsetHeight <=
        window.innerHeight
      )
      {
        this.direction = "downRight";
      } else
      {
        if(pos.top > window.innerHeight / 2)
        {
          this.direction = "upRight";
        } else
        {
          this.direction = "downRight";
        }
      }
    } else
    {
      if(
        pos.top + this.element.nativeElement.offsetHeight >
        window.innerHeight
      )
      {
        this.direction = "upLeft";
      } else
      {
        if(pos.top > window.innerHeight / 2)
        {
          this.direction = "upLeft";
        } else
        {
          this.direction = "downLeft";
        }
      }
    }
  }
  protected setVisible()
  {
    this.isVisible = true;
  }
  @HostListener("mousewheel", ["$event"])
  protected onmousewheel($event)
  {
    $event.stopPropagation();
  }
  @HostListener("window:resize", ["$event"])
  protected onwindowresize($event)
  {
    this.setMaxHeight();
  }
  init() 
  {
    //To prevent page shake
    _$("body").css("overflow", "hidden");
    setTimeout(() =>
    {
      this.setPosition();
      this.setMaxHeight();
      this.setVisible();
      _$("body").css("overflow", "auto");
    }, 50);
  }
}
export interface NgPopBaseConfig
{
  cssClasses?: string[];
  isActive?: boolean;
  isDisabled?: boolean;
}
