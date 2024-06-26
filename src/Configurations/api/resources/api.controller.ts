export enum AccountController {
    Default = "User",
    GetAuthorize = "GET_AUTHORIZE",
    LogInAuthorize = "LOGIN_AUTHORIZE",
    RefreshTokenAuthorize = "REFRESH_TOKEN_AUTHORIZE",
}
export enum CategoryController {
    Default = "Category",
    Add = "ADD_CATEGORY",
    GetAll = "GET_ALL",
    Get = "GET_CATEGORY",
    Change = "CHANGE_CATEGORY",
    Remove = "REMOVE_CATEGORY",
}
export enum ProductController {
    Default = "Product",
    Add = "ADD_PRODUCT",
    GetAll = "GET_ALL",
    Get = "GET_BY_ARTICLE",
    GetFilter = "GET_PRODUCTS_BY_CATEGORY",
    Change = "CHANGE_PRODUCT",
    ChangeImage = "CHANGE_IMAGE_PRODUCT",
    Addmage = "ADD_IMAGE_PRODUCT",
    Remove = "REMOVE_PRODUCT",
}

export enum QuestionController
{
    Default = "Question",
    Add = "ADD_QUESTION",
    Get = "GET_ALL",
}