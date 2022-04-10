import Pagination from "react-bootstrap/Pagination"
import {observer} from "mobx-react-lite"

const PaginationUI = observer(({totalPages, page, changePage}) => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === page}  onClick={() => changePage(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <>
            <Pagination>{items}</Pagination>
        </>
    )
})

export default PaginationUI;