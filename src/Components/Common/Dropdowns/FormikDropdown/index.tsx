import { ErrorMessage, useField } from "formik";
import React from "react";
import { FormikDropdownProps } from "./types.formikdropdown";

import style from "./style.formikdropdown.module.scss";

export const FormikDropdown: React.FC<FormikDropdownProps> = ({
  options,
  title,
  ...props
}) => {
  const [field] = useField(props);

  return (
    <div className={`${style.container}`}>
      <div className={`${style.errorContainer}`}>
                <p className={`${style.title}`}>{title}</p>
                <ErrorMessage component="p" name={field.name} render={(errorMessage: string) => {
                    return <p className={`${style.message}`}>{errorMessage}</p>;
                }} />
            </div>
      <select
        className={`${style.dropdown}`}
        onChange={field.onChange}
        name={field.name}
      >
        <option value="" label={title}>
          {title}
        </option>
        {options.map((item) => {
          return (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
