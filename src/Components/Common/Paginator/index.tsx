import ReactPaginate from "react-paginate"
import { IPaginatorProps } from "./types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import style from "./style.paginator.module.scss";

export const Paginator: React.FC<IPaginatorProps> = ({...props}) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel={<FontAwesomeIcon className="text-xl" icon={faAngleRight} />}
            previousLabel={<FontAwesomeIcon className="text-xl" icon={faAngleLeft} />}
            onPageChange={(e: any) => { props.onPaginate(e.selected + 1) }}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            initialPage={props.inititalPage}
            pageCount={props.total}
            className={`${style.paginator__classname}`}
            nextClassName={`${style.paginator__next}`}
            pageClassName={`${style.paginator__page}`}
            breakClassName={`${style.paginator__break}`}
            activeClassName={`${style.paginator__active}`}
            disabledClassName={`${style.paginator__disabled}`}
            nextLinkClassName={`${style.paginator__nextLink}`}
            pageLinkClassName={`${style.paginator__pageLink}`}
            previousClassName={`${style.paginator__previous}`}
            breakLinkClassName={`${style.paginator__breakLink}`}
            activeLinkClassName={`${style.paginator__activeLink}`}
            containerClassName={`${style.paginator__container}`}
            disabledLinkClassName={`${style.paginator__disabledLink}`}
            previousLinkClassName={`${style.paginator__previousLink}`}
            renderOnZeroPageCount={() => { }}
        />
    )
}