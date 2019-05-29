import { HEADER_NAVS } from "src/app-config";
import { HeaderNavConfig, HeaderNavItem, DEFAULT_HEADER_NAV_CONFIG } from 'projects/ng-poppins/src/public-api';

export function geneNavConfig(activeItemId): HeaderNavConfig {
  let navItems: HeaderNavItem[] = [...HEADER_NAVS];
  let cfg = DEFAULT_HEADER_NAV_CONFIG;
  navItems.map((navItem,i) => {
    if (navItem.id == activeItemId) 
    cfg.activeIndex = i;
  });
  cfg.items = navItems;
  return cfg;
}
