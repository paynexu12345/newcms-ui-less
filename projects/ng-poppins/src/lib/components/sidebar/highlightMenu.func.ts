import { Menu } from "./class";
export function hightlightMenuByRouter(
  router,
  menus: Menu[],
  fromindex = 2
): void {
  // Relative url matched by router  eg. /content/program/manage
  let url = router.url.split("?")[0].split("#")[0];

  let nodes = url.split("/");

  // result: nodes[0] == empty，nodes[1] = such as `content`.
  let node_2 = nodes[Number(fromindex)];

  //eg: `manage`
  let node_3 = nodes[Number(fromindex) + 1];

  if (node_2 == undefined) {
    return;
  }
  if (menus == undefined || menus.length == 0) {
    return;
  }
  menus.forEach(menu => {
    if (menu.nameForUrl.toLowerCase() == node_2.toLowerCase()) {
      menu.isActive = true;

      // If menu has no children node ,do not need to open it
      if (menu.children) {
        menu.isOpen = true;
      }

      if (menu.children) {
        menu.children.forEach(menuChildren => {
          if (menuChildren.nameForUrl.toLowerCase() == node_3.toLowerCase()) {
            menuChildren.isActive = true;
          } else {
            menuChildren.isActive = false;
          }
        });
      }
    } else {
      menu.isActive = false;

      menu.isOpen = false;

      if (menu.children) {
        menu.children.forEach(menuChildren => {
          menuChildren.isActive = false;
          menuChildren.isOpen = false;
        });
      }
    }
  });
}
