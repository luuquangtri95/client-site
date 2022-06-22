import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination({ onPageChange, pageCount }) {
  const handleOnPageChange = (event) => {
    onPageChange(event.selected + 1)
  }

  return (
    <ReactPaginate
      nextLabel='>'
      onPageChange={handleOnPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel='<'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakLabel='...'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination'
      activeClassName='active'
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
