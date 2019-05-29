import { CustomizeClassNames } from '../interfaces';

export class CarouselConfig implements CustomizeClassNames{
  width?:number;
  height:number;
  activeIndex?:number;
  autoPlay?:boolean;
  autoPlayInterval?:number;
  cssClasses?:string[];
}
export const DEFAULT_CAROUSEL_CONFIG:CarouselConfig = {
  width:400,
  height:400,
  activeIndex : 1,
  autoPlay:false,
  autoPlayInterval:3000,
  cssClasses:[]
}