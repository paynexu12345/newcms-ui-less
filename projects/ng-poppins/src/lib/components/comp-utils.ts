export function commonInitCfg(component, cfg) {
  if (cfg) {
    component.config = Object.assign({}, component.config || {}, cfg);
    if (!component.config.cssClasses) component.config.cssClasses = [];
    if (component.config.cssClasses.length > 0) {
      let t = [...component.config.cssClasses];
      t.unshift(component.rootCssClass);
      if (component.reservedCssClasses && component.reservedCssClasses instanceof Array) {
        component.reservedCssClasses.forEach(r => {
          t.forEach((c, i) => {
            if (r == c) t.splice(i, 1);
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
          if(!derivedCtor.prototype[name])
          derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
  });
}