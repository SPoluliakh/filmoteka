import ReactPaginate from 'react-paginate';
import './Pagination.css';

function PaginatedItems({ setPageNumber, totalPages, currentPage }) {
  const handlePageClick = event => {
    setPageNumber({ page: event.selected + 1 });
  };

  return (
    <>
      <ReactPaginate
        pageCount={totalPages}
        forcePage={currentPage}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={2}
        marginPagesDisplayed={4}
        containerClassName="pagination"
        activeClassName="active"
        breakClassName="item"
        breakLinkClassName="link"
        pageClassName="item"
        pageLinkClassName="link"
        previousClassName="item"
        previousLinkClassName="link"
        nextClassName="item"
        nextLinkClassName="link"
      />
    </>
  );
}

export default PaginatedItems;
