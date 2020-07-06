import React from 'react'

export const Pagination = ({ pages, activePage, handlePagination, setActivePage}) => {
  const Pages = new Array(pages).fill('')

  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin="true">
      <li onClick={() => handlePagination('prev')} >
        <span>
          <span uk-pagination-previous="true" />
        </span>
      </li>

      {
        Pages.map((_ , i) => (
          <li key={i}
            className={activePage === i + 1 ? "uk-active" : ""}
            onClick={() => handlePagination(i + 1)}
          >
            <span style={{cursor: 'pointer'}} >{i + 1}</span>
          </li>
        ))
      }

      <li onClick={() => handlePagination('next')}>
        <span>
          <span uk-pagination-next="true" />
        </span>
      </li>

    </ul>
  )
}
