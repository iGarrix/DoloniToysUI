import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../Redux/hooks/hooks";
import { accountSlice } from "../../../../../Redux/reducers/accountReducer/accountSlice";
import { LoginAdmin } from "../../../../../Redux/reducers/accountReducer/actions";
import { ILoginRequest, LoginScheme } from "../../../../../Redux/reducers/accountReducer/types";
import { DefButton } from "../../../../Common/Buttons/DefButton";
import { Field } from "../../../../Common/Inputs/Field";
import style from "./style.login.module.scss";

export const LoginView : React.FC = () => {

    const dispatch = useAppDispatch();

    const { auth, error } = useAppSelector(state => state.accountReducer);
    const nav = useNavigate();

    const values : ILoginRequest = {
        email: "",
        password: ""
    }

    const onSubmitForm = async (values: ILoginRequest) => {
        try {
            var request: ILoginRequest = {
                email: values.email,
                password: values.password,
            };
            await dispatch(LoginAdmin(request));
            nav("/for-admins");

        } catch (error) {
            dispatch(accountSlice.actions.onError("Login was failed, try again"));
        }   
    };

    return (
        <section className={`${style.container}`}>
            <aside className={`${style.blockSide}`}>
                <div className={`${style.titleBlock}`}>
                    <h1 className={`${style.title}`}>Log in</h1>
                    {
                        error ?
                        <p className={`${style.error}`}>{error}</p> :
                        <p className={`${style.desc}`}>Log in to the admin panel to manage products</p>
                    }
                </div>
                <Formik initialValues={values} validationSchema={LoginScheme} onSubmit={onSubmitForm}>
                    <Form className={`${style.formContainer}`}>             
                        <div className={`${style.fieldBlock}`}>
                            <Field placeholder="Email" name="email" type="email" />
                            <Field placeholder="Password" name="password" type="password" />
                        </div>
                        <div className={`${style.buttonContainer}`}>
                            <DefButton title="Back" onClick={() => {nav(-1)}}/>
                            <DefButton title="Login" />
                        </div>
                    </Form>
                </Formik>
            </aside>
        </section>
    )
}