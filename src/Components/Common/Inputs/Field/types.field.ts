export interface IFieldProps {
    name: string;
    placeholder: string,
    value?: string,
    type?: "text" | "password" | "email" | "number",
    visiblePlaceholder?: boolean,
    onSumbit?: (e: any) => void,
}