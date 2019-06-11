import {Component, OnInit, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import {ContainerComponent} from '../../base';
import {NgPopTableSuitePageItemComponent} from './page-item/page-item.component';
import {commonInitCfg} from '../../comp-utils';
import {TablePageConfig} from '../class';
import {NgPopTableSuiteComponent} from '../table-suite.component';

@Component({
  selector: 'ng-pop-table-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class NgPopTableSuitePageComponent extends ContainerComponent<NgPopTableSuitePageItemComponent> implements OnInit, OnDestroy
{

  constructor(public containerComp: NgPopTableSuiteComponent)
  {
    super();
  }
  rootCssClass = "ng-pop-table-page";
  _config: TablePageConfig = {
    totalCount: 0,
    start: 1,
    pageSize: 10,
    maxPages: 5
  };
  totalPage = 0;
  pages = [];
  currentPage = 0;
  @Output() readonly update = new EventEmitter();
  @Input("config")
  set config(val)
  {
    if(val)
    {
      commonInitCfg(this, val);
      this.calCurrentPage();
      this.calTotalPage();
      this.calPages();
    }
  }
  get config()
  {
    return this._config;
  }
  calTotalPage()
  {
    this.totalPage = Math.ceil(this.config.totalCount / this.config.pageSize);
  }
  calPages()
  {
    let pageCount = Math.ceil(this.config.totalCount / this.config.pageSize);
    // this.calCurrentPage();
    let leftPages = [];
    let rightPages = [];
    if(this.currentPage == 0)
    {
      this.calCurrentPage();
    }
    if(this.config.maxPages % 2 == 0)
    {
      for(let i = 0; i < this.config.maxPages / 2; i++)
      {
        if(this.currentPage - i > 0)
        {
          leftPages.push(this.currentPage - i);
        }
        if(this.currentPage + i + 1 <= pageCount)
        {
          rightPages.push(this.currentPage + i + 1);
        }
      }
      leftPages.reverse();
      this.pages = [...leftPages, ...rightPages];
    }
    else
    {
      for(let i = 1; i < this.config.maxPages / 2; i++)
      {
        if(this.currentPage - i > 0)
        {
          leftPages.push(this.currentPage - i);
        }
        if(this.currentPage + i <= pageCount)
        {
          rightPages.push(this.currentPage + i);
        }
      }
      leftPages.reverse();
      this.pages = [...leftPages, this.currentPage, ...rightPages];
    }


  }
  calCurrentPage()
  {
    if(this.containerComp.data.length > 0)
    {
      this.currentPage = Math.ceil((this.config.start || 1) / this.config.pageSize);
    }
  }
  selectPage($event, page)
  {
    this.currentPage = page;
    this.calPages();
    this.update.emit({
      start: page * this.config.pageSize + 1
    })
  }
  ngOnInit()
  {
    this.containerComp.pageRef = this;
  }

  ngOnDestroy()
  {
    this.containerComp.pageRef = null;
  }

}
