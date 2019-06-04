import {Component, OnInit, Input} from '@angular/core';
import {ContainerComponent} from '../base';
import {NgPopTableComponent} from './table/table.component';
import {NgPopTableSuitePageComponent} from './page/page.component';

@Component({
  selector: 'ng-pop-table-suite',
  templateUrl: './table-suite.component.html',
  styleUrls: ['./table-suite.component.less']
})
export class NgPopTableSuiteComponent extends ContainerComponent<null> implements OnInit
{
  constructor()
  {
    super()
  }
  tableRef: NgPopTableComponent;
  pageRef: NgPopTableSuitePageComponent;
  private _data = [];
  @Input()
  set data(val)
  {
    if(!val || !(val instanceof Array)) return;
    this.data = val;
  };
  get data()
  {
    return this._data;
  }
  ngOnInit()
  {
  }

}
