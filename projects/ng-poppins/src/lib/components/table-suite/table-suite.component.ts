import {Component, OnInit, Input} from '@angular/core';
import {ContainerComponent} from '../base';
import {NgPopTableComponent} from './table/table.component';
import {NgPopTableSuitePageComponent} from './page/page.component';
import {commonInitCfg} from '../comp-utils';
import {TableSuiteConfig, EXAMPLE_TABLE_SUITE_CONFIG} from './class';

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
  rootCssClass = "ng-pop-table-suite";
  _data = [];
  _config: TableSuiteConfig = EXAMPLE_TABLE_SUITE_CONFIG;
  @Input()
  set data(val)
  {
    if(!val || !(val instanceof Array)) return;
    this._data = val;
  };
  get data()
  {
    return this._data;
  }
  @Input()
  set config(val)
  {
    if(val)
    {
      commonInitCfg(this, val);
    }
  }
  get config()
  {
    return this._config;
  }
  ngOnInit()
  {
  }

}
