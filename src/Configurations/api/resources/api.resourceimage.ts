import { apiUrl } from "../../api";

export const ImagePathRoot = "Images";

export enum ImagePaths {
    Category = "Category",
    Product = "Product",
}

export function ImageCombiner(imagePath: string, src: string) {
    return apiUrl + ImagePathRoot + "/" + imagePath + "/" + src;
}