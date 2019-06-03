import { HEADER_NAVS } from "src/app-config";
import { HeaderNavConfig, HeaderNavItem, DEFAULT_HEADER_NAV_CONFIG } from 'projects/ng-poppins/src/public-api';

export function geneNavConfig(activeItemId): HeaderNavConfig {
  let navItems: HeaderNavItem[] = [...HEADER_NAVS];
  let cfg = DEFAULT_HEADER_NAV_CONFIG;
  navItems.map((navItem,i) => {
    if (navItem.id == activeItemId) 
    navItem.isActive = true;
    else 
    navItem.isActive = false;
  });
  cfg.items = navItems;
  return cfg;
}
