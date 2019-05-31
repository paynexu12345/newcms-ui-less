export const CSS_CLASS_NAME_PREFIX = "ng-pop-";
export function commonInitCfg(component, cfg) {
  if (cfg) {
    component.config = Object.assign({}, component.config || {}, cfg);
    if (!component.config.cssClasses) {
      component.config.cssClasses = [];
    }
    if (component.config.cssClasses.length > 0) {
      const t = [...component.config.cssClasses];
      t.unshift(component.rootCssClass);
      if (
        component.reservedCssClasses &&
        component.reservedCssClasses instanceof Array
      ) {
        component.reservedCssClasses.forEach(r => {
          t.forEach((c, i) => {
            if (r === c) {
              t.splice(i, 1);
            }
          });
        });
      }
      component.rootCssClass = t.join(" ");
    }
  }
}
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (!derivedCtor.prototype[name]) {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}
export function filterActiveItem<T>(items: T[]): T {
  let ret = items.filter(item => (item as any).isActive)[0];
  if (!ret) { ret = items[0]; }
  return ret;
}
export function commonActivateOnInit(component) {
  setTimeout(() => {
    if (
      component.childComps &&
      component.childComps instanceof Array &&
      component.config &&
      component.config.activeIndex >= 0 &&
      component.config.activeIndex < component.childComps.length - 1
    ) {
      component.childComps[component.config.activeIndex].activate();
    }
  }, 100);
}
export function commonRegisterComponent(component, attribute: string , regComponent) {
  component[attribute] = regComponent;
}
export function commonCancelComponent(component, attribute) {
  component[attribute] = null;
}
