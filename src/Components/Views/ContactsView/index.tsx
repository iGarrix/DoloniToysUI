import { Form, Formik } from "formik"
import { stat } from "fs"
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks/hooks"
import { SendContact } from "../../../Redux/reducers/contactReducer/actions"
import { contactSlice } from "../../../Redux/reducers/contactReducer/contactSlice"
import { ISendContactRequest, SendContactScheme } from "../../../Redux/reducers/contactReducer/types"
import { RedButton } from "../../Common/Buttons/RedButton"
import { Field } from "../../Common/Inputs/Field"
import style from "./style.contact.module.scss";


const extend = require('../../../Assets/Icons/extendContact.png');

const pen = require('../../../Assets/Icons/Pen.png');

export const ContactsView: React.FC = () => {


    const { error, successMessage} = useAppSelector(state => state.contactReducer);

    const values : ISendContactRequest = {
        name: "",
        email: "",
        message: ""
    }

    const dispatch = useAppDispatch();

    const onSubmitForm = async (values: ISendContactRequest) => {
        try {
            await dispatch(SendContact(values));

        } catch (error) {
            dispatch(contactSlice.actions.onError("Login was failed, try again"));
        }   
    };

    return (
        <section className={`${style.contactContainer}`}>
            <div className={`${style.extend}`}>
                <img alt="extend" src={extend} className={`${style.image}`} />
            </div>
            <aside className={`${style.side_1}`}>
                <h1 className={`${style.title}`}>Зворотній зв’язок</h1>
                <div className={`${style.descContainer}`}>
                    <p className={`${style.subtitle}`}>
                        ТМ "Doloni - Toys"
                    </p>
                    <div className={`${style.desc}`}>
                        <p>
                            Вул. Млинівська 18
                        </p>
                        <p>
                            33000 м Рівне
                        </p>
                        <p>
                            info@doloni.toys
                        </p>
                    </div>
                </div>
            </aside>
            <aside className={`${style.side_2}`}>
                <h1 className={`${style.title}`}>Надіслати 
                    <img alt="pen" src={pen} className={`${style.pen}`} />
                </h1>
                <Formik initialValues={values} validationSchema={SendContactScheme} onSubmit={onSubmitForm}>
                    <Form className={`${style.formContainer}`}>
                        <Field placeholder="Name" name="name" type="text" visiblePlaceholder={false} />
                        <Field placeholder="Email" name="email" type="email" visiblePlaceholder={false} />
                        <Field placeholder="Your message" name="message" type="text" visiblePlaceholder={false} />
                        <div className={`${style.buttonContainer}`}>
                            <div className={`${style.buttonWrapper}`}>
                                <RedButton title={error ? error : successMessage ? successMessage : "Відправити"} onClick={() => {}}/>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </aside>
        </section>
    )
}