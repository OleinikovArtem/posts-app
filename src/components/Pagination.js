import React from 'react'


const pageNumbers = [1,2,3,4,5];

export const Pagination = ({page,setPage}) => {

  const handlePage = (e,page) => {
    e.preventDefault();
    setPage(page)
  }

  const handlePrev = (e) => {
    e.preventDefault();
    setPage(page => page-1);
  }

  const handleNext = (e) => {
    e.preventDefault();

    setPage(page => page = page + 1 >=6 ? 5 : page + 1);
  }

  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin="true">
      <li>
        <a onClick={handlePrev} href="/">
          <span uk-pagination-previous="true" />
        </a>
      </li>
      {
        pageNumbers.map(pageNumber =>{
          let className = pageNumber === page ? "uk-active" : "";
          return(
            <li className={className} >
            <a onClick={(e) => handlePage(e,pageNumber)} href="/">{pageNumber}</a>
          </li>
        )})
      }
      <li>
        <a onClick={handleNext} href="/">
          <span uk-pagination-next="true" />
        </a>
      </li>
    </ul>
  )
}
