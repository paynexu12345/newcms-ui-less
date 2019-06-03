import { HeaderNavItem } from 'projects/ng-poppins/src/public-api';

export const _APP_CONTENT_NAME = 'content';
export const _APP_PRODUCT_NAME = 'product';
export const NAVITEM_ID_HOME = 1;
export const NAVITEM_ID_CONTENT = 2;
export const NAVITEM_ID_CUSTOMER = 3;
export const HEADER_NAVS: HeaderNavItem[] = [
  {
    id: NAVITEM_ID_HOME,
    url: 'https://newcms.neulion.net.cn:8443/home',
    referTo: '',
    text:"Home"
  },
  {
    id: NAVITEM_ID_CONTENT,
    url: 'https://newcms.neulion.net.cn:8080/content',
    referTo: _APP_CONTENT_NAME,
    text:"Content"
  },
  {
    id: NAVITEM_ID_CUSTOMER,
    url: 'https://newcms.neulion.net.cn:8443/customer',
    referTo: '',
    text:"Customer"
  }
];
