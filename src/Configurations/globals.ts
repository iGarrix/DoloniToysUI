import { apiUrl } from "./api";

export enum RecCardType {
    Gift = "gift",
    Like = "like",
    Geograph = "geog",
}

export enum SectCardType {
    Baby = "bb",
    Girls = "grls",
    Boys = "boys",
}

export enum LanguageType {
    UA = "ua",
    EN = "en",
} 

export interface IPaginateResponse<T> {
    totalObj: number,
    total: number,
    currentPage: number,
    nextPage: number | null,
    prevPage: number | null,
    takes: number,
    pageables: Array<T> | null,
}

export interface IExceptionHandleResponse {
    Message: string,
    StatusCode: number,
}

export function GetApiUrl(rootRoute: string, route: string) {
    return apiUrl + "api/" + rootRoute + "/" + route;
}