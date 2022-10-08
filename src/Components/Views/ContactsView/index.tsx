import { Form, Formik } from "formik"
import { stat } from "fs"
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks/hooks"
import { SendContact } from "../../../Redux/reducers/contactReducer/actions"
import { contactSlice } from "../../../Redux/reducers/contactReducer/contactSlice"
import { ISendContactRequest, SendContactScheme } from "../../../Redux/reducers/contactReducer/types"
import { RedButton } from "../../Common/Buttons/RedButton"
import { Field } from "../../Common/Inputs/Field"

const extend = require('../../../Assets/Icons/extendContact.png');

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
        <section className="grid grid-cols-8 grid-rows-1 w-full h-[90vh] bg-bluesky-100 pt-[15%] relative">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                <img alt="extend" src={extend} className="scale-[0.9] opacity-70 w-full h-full" />
            </div>
            <aside className="col-start-2 col-span-3 flex flex-col gap-[40px] z-10">
                <h1 className="font-[700] text-3xl">Зворотній зв’язок</h1>
                <div className="flex flex-col gap-[20px]">
                    <p className="font-[700] text-xl">
                        ТМ "Doloni - Toys"
                    </p>
                    <div className="text-lg">
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
            <aside className="col-span-4 flex flex-col gap-[40px] pr-[30%] z-10">
                <h1 className="font-[700] text-3xl">Надіслати</h1>
                <Formik initialValues={values} validationSchema={SendContactScheme} onSubmit={onSubmitForm}>
                    <Form className="flex flex-col gap-[15px]">
                        <Field placeholder="Name" name="name" type="text" visiblePlaceholder={false} />
                        <Field placeholder="Email" name="email" type="email" visiblePlaceholder={false} />
                        <Field placeholder="Your message" name="message" type="text" visiblePlaceholder={false} />
                        <div className="flex w-full justify-end">
                            <div className="scale-[0.8] translate-x-[10%]">
                                <RedButton title={error ? error : successMessage ? successMessage : "Відправити"} onClick={() => {}}/>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </aside>
        </section>
    )
}