import { ErrorMessage, useField } from "formik";
import { IFieldProps } from "./types.field";
import style from "./style.field.module.scss";

export const Field: React.FC<IFieldProps> = ({ placeholder, value, type, onSumbit, ...props }) => {
    const [field] = useField(props);
    return (
        <div className={`${style.fieldContainer}`}>
            <div className={`${style.errorContainer}`}>
                <p className={`${style.placeholder}`}>{placeholder}</p>
                <ErrorMessage component="p" name={field.name} render={(errorMessage: string) => {
                    return <p className={`${style.error}`}>{errorMessage.substring(0, 20)} *</p>;
                }} />
            </div>
            <input placeholder={placeholder} type={type} defaultValue={value} onSubmit={onSumbit}
                onChange={field.onChange}
                name={field.name}
                className={`${style.inpField}`} />
        </div>
    )
}