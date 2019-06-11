import {NgPopBaseConfig} from "../base";

export class CarouselConfig implements NgPopBaseConfig
{
  width?: number;
  height: number;
  activeIndex?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  cssClasses?: string[];
}
export const EXAMPLE_CAROUSEL_CONFIG: CarouselConfig = {
  width: 400,
  height: 400,
  activeIndex: 1,
  autoPlay: false,
  autoPlayInterval: 3000,
  cssClasses: []
};
