import { ReactNode } from "react";

export interface ICarousel {
    childrens: ICarouselItem[],
}

export interface ICarouselItem {
    children: any,
    // key: string,
}