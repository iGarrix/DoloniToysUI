export interface IFieldProps {
    name: string;
    placeholder: string,
    value?: string,
    type?: "text" | "password" | "email",
    onSumbit?: (e: any) => void,
}