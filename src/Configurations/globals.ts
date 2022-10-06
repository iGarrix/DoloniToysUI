import { apiUrl } from "./api";
import i18n from "./LangConfig";

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

export function changeLanguage(lang: string) {
    if (lang) {
        switch (lang) {
            case LanguageType.EN:
                localStorage.setItem("lang", LanguageType.EN);
                i18n.changeLanguage(LanguageType.EN);
                break;
            case LanguageType.UA:
                localStorage.setItem("lang", LanguageType.UA);
                i18n.changeLanguage(LanguageType.UA);
                break;  
            default:
                localStorage.setItem("lang", LanguageType.EN);
                i18n.changeLanguage(LanguageType.EN);
                break;
        }
    }
    else {
        i18n.changeLanguage(LanguageType.EN);
    }
}

export interface IBaseReducerState {
    isLoading: boolean;
    error: string;
    successMessage: string,
}