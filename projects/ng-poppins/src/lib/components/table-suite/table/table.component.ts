import {Component, OnInit, Input} from '@angular/core';
import {ContainerComponent} from '../../base';
import {TableConfig, EXAMPLE_TABLE_CONFIG, TextFieldType, TextLinkFieldType, CheckboxFieldType, ImageFieldType, ImageLinkFieldType, TEXT_FIELD_TYPE, TEXT_LINK_FIELD_TYPE, CHECKBOX_FIELD_TYPE, IMAGE_FIELD_TYPE, IMAGE_LINK_FIELD_TYPE} from '../class';
import {commonInitCfg, checkUrlIsOutLink} from '../../comp-utils';
import {NgPopTableSuiteComponent} from '../table-suite.component';
import {Router} from '@angular/router';

@Component({
  selector: 'ng-pop-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class NgPopTableComponent extends ContainerComponent<null> implements OnInit
{

  constructor(public containerComp: NgPopTableSuiteComponent, public router: Router)
  {
    super();
  }
  rootCssClass = "ng-pop-table";
  _config: TableConfig = EXAMPLE_TABLE_CONFIG;
  TEXT_FIELD_TYPE: TextFieldType = TEXT_FIELD_TYPE;
  TEXT_LINK_FIELD_TYPE: TextLinkFieldType = TEXT_LINK_FIELD_TYPE;
  CHECKBOX_FIELD_TYPE: CheckboxFieldType = CHECKBOX_FIELD_TYPE;
  IMAGE_FIELD_TYPE: ImageFieldType = IMAGE_FIELD_TYPE;
  IMAGE_LINK_FIELD_TYPE: ImageLinkFieldType = IMAGE_LINK_FIELD_TYPE;
  @Input("config")
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
  clickField(link: string, isLink)
  {
    if(!isLink) return;
    let isOutLink = checkUrlIsOutLink(link);
    if(isOutLink)
    {
      window.open(link, "_blank");

    } else
    {
      this.router.navigateByUrl(link);
    }
  }
  clickBtn($event, rowData)
  {
    this.config.clickRowBtns($event, rowData);
  }
  ngOnInit()
  {
  }

}
