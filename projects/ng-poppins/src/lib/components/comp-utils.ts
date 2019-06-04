declare var $;
export const CSS_CLASS_NAME_PREFIX = "ng-pop-";
export const KEY_UP = 38;
export const KEY_DOWN = 40;
export const KEY_ENTER = 13;
export const KEY_ESC = 27;
export const _$ = $;
export function commonInitCfg(component, cfg)
{
  if(cfg)
  {
    component._config = Object.assign({}, component._config || {}, cfg);
    if(!component._config.cssClasses)
    {
      component._config.cssClasses = [];
    }
    if(component._config.cssClasses.length > 0)
    {
      const t = [...component._config.cssClasses];
      t.unshift(component.rootCssClass);
      if(
        component.reservedCssClasses &&
        component.reservedCssClasses instanceof Array
      )
      {
        component.reservedCssClasses.forEach(r =>
        {
          t.forEach((c, i) =>
          {
            if(r === c)
            {
              t.splice(i, 1);
            }
          });
        });
      }
      component.rootCssClass = t.join(" ");
    }
  }
}
export function applyMixins(derivedCtor: any, baseCtors: any[])
{
  baseCtors.forEach(baseCtor =>
  {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name =>
    {
      if(!derivedCtor.prototype[name])
      {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}
export function filterActiveItem<T>(items: T[]): T
{
  let ret = items.filter(item => (item as any).isActive)[0];
  if(!ret)
  {
    ret = items[0];
  }
  return ret;
}
