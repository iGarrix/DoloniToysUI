import { ReactNode } from "react";

export interface ICarousel {
    childrens: ICarouselItem[],
}

export interface ICarouselItem {
    children: ReactNode,
    // key: string,
}