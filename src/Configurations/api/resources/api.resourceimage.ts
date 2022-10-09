import { apiUrl } from "../../api";

export const ImagePathRoot = "Images";
export const ErrorImage = "https://static.thenounproject.com/png/568288-200.png";

export enum ImagePaths {
    Category = "Category",
    Product = "Product",
}

export function ImageCombiner(imagePath: string, src: string) {
    return apiUrl + ImagePathRoot + "/" + imagePath + "/" + src;
}