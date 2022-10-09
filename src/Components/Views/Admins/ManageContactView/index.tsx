import moment from "moment";
import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks/hooks"
import { GetAllContact } from "../../../../Redux/reducers/contactReducer/actions";
import { Paginator } from "../../../Common/Paginator";

import style from "./style.managecontact.module.scss";

export const ManageContactView: React.FC = () => {

    const { contacts, isLoading, error } = useAppSelector(state => state.contactReducer);
    const dispatch = useAppDispatch();
    const [isPending, startTransition] = useTransition();
    const [searchParams, setSearchParams] = useSearchParams();
    const [initPage, setPage] = useState(() => {
        const currentPage = searchParams.get("page");
        if (currentPage) {
            return Number.parseInt(currentPage) - 1;
        }

        return 0;
    });

    async function fetchContacts(page: number, take: number) {
        await dispatch(GetAllContact(page, take));
    }

    useEffect(() => {
        if (searchParams) {
            const currentPage = searchParams.get("page");
            if (currentPage) {
                fetchContacts(Number.parseInt(currentPage), 30);
            }
        }
    }, [])

    const onPaginate = async (event: number) => {
        startTransition(() => {
            setSearchParams({ page: `${event}` });
            fetchContacts(event, 30);
        }); 
    }


    return (
        <div className={`${style.container}`}>
            <div className={`${style.infoContainer}`}>
                <h1 className={`${style.message}`}>There are {contacts?.total ? contacts.total : "none"} pages and {contacts ? contacts.totalObj : "none"} messages</h1>
            </div>
            {
                error ?
                    <div className={`${style.errorContainer}`}>
                        <h1 className={`${style.message}`}>{error}</h1>
                    </div> :
                    <table className={`${style.table}`}>
                        <thead className={`${style.headerContainer}`}>
                            <tr className={`${style.block}`}>
                                <th className={`${style.title}`}>Name</th>
                                <th className={`${style.title}`}>Email Address</th>
                                <th className={`${style.title}`}>Message</th>
                                <th className={`${style.title}`}>Send time</th>
                            </tr>
                        </thead>
                        <tbody className={`${style.mainContainer}`}>
                            {
                                contacts?.pageables?.map((item, index) => {
                                    return (
                                        <tr key={index} className={`${style.block}`}>
                                            <td className={`${style.item}`}>{item.name}</td>
                                            <td className={`${style.item}`}>{item.email}</td>
                                            <td className={`${style.item}`}>{item.message}</td>
                                            <td className={`${style.item}`}>{moment(item.create).format("dddd DD.MM.YYYY HH:mm")}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
            <div className={`${style.paginatorContainer } ${contacts?.total === 1 ? style.hide : style.visible}`}>
                <Paginator total={contacts?.total ? contacts?.total : 0} onPaginate={onPaginate} inititalPage={initPage} />
            </div>
        </div>
    )
}