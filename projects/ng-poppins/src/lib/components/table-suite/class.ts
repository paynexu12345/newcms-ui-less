import {NgPopBtnGroupConfig} from '../btn-group/class';

export abstract class AbstractTableField
{
  key: string;
  type: any;
}
export type TableField = TextField | TextLinkField | CheckboxField | ImageField | ImageLinkField;
export const TEXT_FIELD_TYPE = "text";
export const TEXT_LINK_FIELD_TYPE = "textLink";
export const CHECKBOX_FIELD_TYPE = "checkbox";
export const IMAGE_FIELD_TYPE = "image";
export const IMAGE_LINK_FIELD_TYPE = "imageLink";
export type TextFieldType = "text";
export type TextLinkFieldType = "textLink";
export type CheckboxFieldType = "checkbox";
export type ImageFieldType = "image";
export type ImageLinkFieldType = "imageLink";
export type OutLink = 1;
export type InternalLink = 2;
export class TableHeader
{
  width: string;
  text: string;
  fields: TableField[];
  isShow: boolean;
}
export class TableConfig
{
  headers: TableHeader[];
  showBatchSelect: boolean;
  btnGroup: NgPopBtnGroupConfig;
  clickRowBtns: (btnInfo, rowData) => void;
}
export class TextField implements AbstractTableField
{
  key: string;
  type: TextFieldType | TextLinkFieldType;
  ellipse: boolean;
}

export class TextLinkField extends TextField
{
  type: TextLinkFieldType;
  linkKey: string;
}

export class CheckboxField implements AbstractTableField
{
  key: string;
  type: CheckboxFieldType;
}
export class ImageField implements AbstractTableField
{
  key: string;
  type: ImageFieldType | ImageLinkFieldType;
}
export class ImageLinkField extends ImageField
{
  type: ImageLinkFieldType;
  linkKey: string;
}
export class TablePageConfig
{
  totalCount: number;
  start: number;
  pageSize: number;
  maxPages?: number;
}
export class TableSuiteConfig
{
  table: TableConfig;
  page: TablePageConfig;
}
export const EXAMPLE_TABLE_CONFIG: TableConfig = {
  headers: [
    {
      width: "50px",
      text: "Id",
      fields: [
        {
          type: "text",
          key: "id",
          ellipse: true
        }
      ],
      isShow: true
    },
    {
      width: "100px",
      text: "Image",
      fields: [
        {
          type: "imageLink",
          key: "image",
          linkKey: "imageLink"
        }
      ],
      isShow: true
    }
    ,
    {
      width: "auto",
      text: "Name",
      fields: [
        {
          type: "textLink",
          key: "name",
          linkKey: "textLink",
          ellipse: true
        },
        {
          type: "text",
          key: "desc",
          ellipse: false
        }
      ],
      isShow: true
    },
    {
      width: "150px",
      text: "Date",
      fields: [
        {
          type: "text",
          key: "date",
          ellipse: true
        }
      ],
      isShow: true
    }
  ],
  showBatchSelect: true,
  btnGroup: {
    items: [
      {
        id: 1,
        text: "Edit",
        type: 1
      },
      {
        id: 2,
        text: "Copy",
        type: 1
      }
    ],
    cssClasses: [],
    isActive: false,
    isDisabled: false
  },
  clickRowBtns: (btnInfo, rowData) =>
  {
    alert(btnInfo.id)
  }
}
export const EXAMPLE_TABLE_PAGE_CONFIG = {
  totalCount: 101,
  start: 1,
  pageSize: 10,
  maxPages: 6
}
export const EXAMPLE_TABLE_SUITE_CONFIG: TableSuiteConfig = {
  table: EXAMPLE_TABLE_CONFIG,
  page: EXAMPLE_TABLE_PAGE_CONFIG
}
export const EXAMPLE_TABLE_DATA = [
  {
    id: 0,
    image: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=sport&step_word=&hs=0&pn=16&spn=0&di=192060&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=655697351%2C3046875050&os=3290286431%2C433107006&simid=4195151387%2C425851127&adpicid=0&lpn=0&ln=1735&fr=&fmq=1559643779626_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fi1.hexunimg.cn%2F2015-11-10%2F180472784.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fw7p5_z%26e3Bijx7g_z%26e3Bv54AzdH3Fda8c-88-8aAzdH3F8ba90d0bn_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined',
    imageLink: "/edit/0",
    textLink: "https://wwww.baidu.com",
    name: "Test program1",
    desc: "Test desc, very very long,Test desc, very very longTest desc, very very longTest desc, very very longTest desc, very very long",
    date: "2019/01/01 12:00:00",
    btnGroup: {
      items: [
        {
          id: 1,
          text: "Edit",
          type: 1
        },
        {
          id: 2,
          text: "Copy",
          type: 1
        },
        {
          id: 2,
          text: "Delete",
          type: 2,
          isDisabled: true
        }
      ],
      cssClasses: [],
      isActive: false,
      isDisabled: false
    }
  },
  {
    id: 1,
    image: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=sport&step_word=&hs=0&pn=16&spn=0&di=192060&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=655697351%2C3046875050&os=3290286431%2C433107006&simid=4195151387%2C425851127&adpicid=0&lpn=0&ln=1735&fr=&fmq=1559643779626_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fi1.hexunimg.cn%2F2015-11-10%2F180472784.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fw7p5_z%26e3Bijx7g_z%26e3Bv54AzdH3Fda8c-88-8aAzdH3F8ba90d0bn_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined',
    name: "Test program2",
    desc: "Test desc, very very long,Test desc, very very longTest desc, very very longTest desc, very very longTest desc, very very long",
    date: "2019/02/01 12:00:00"
  }
];
