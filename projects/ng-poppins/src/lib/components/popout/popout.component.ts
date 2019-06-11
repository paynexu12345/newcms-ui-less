import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {BaseComponent} from '../base';
import {NgPopPopoutService} from './popout.service';
import {fadeInFactory} from '../../animations';
let fadeIn = fadeInFactory();
@Component({
  selector: 'ng-pop-popout',
  templateUrl: './popout.component.html',
  styleUrls: ['./popout.component.less'],
  animations: [fadeIn]
})
export class NgPopPopoutComponent extends BaseComponent implements OnInit, OnDestroy
{
  constructor(public popoutService: NgPopPopoutService)
  {
    super();
  }
  @Output() readonly init = new EventEmitter();
  clickMask($event)
  {
    this.isActive = false;
  }
  clickClose($event)
  {
    this.isActive = false;
  }
  ngOnInit()
  {
    this.popoutService.addMainSubComp(this);
    this.init.emit(this.timeStamp)
  }
  ngOnDestroy()
  {
    this.popoutService.removeMainSubComp(this);
  }

}
