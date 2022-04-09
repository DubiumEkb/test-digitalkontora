import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <button className={page === p ? 'page page__current' : 'page'} key={p} onClick={() => changePage(p)}>{p}</button>
            )}
        </div>
    );
}

export default Pagination;