export interface IFieldProps {
    name: string;
    placeholder: string,
    value?: string,
    type?: "text" | "password" | "email",
    visiblePlaceholder?: boolean,
    onSumbit?: (e: any) => void,
}