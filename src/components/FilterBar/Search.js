import React from 'react'

export const Search = () => {
  return (
    <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
      <span uk-search-icon />
      <span
        className="uk-search-icon uk-search-icon-flip"
        uk-spinner="ratio: 0.6"
      />
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
      />
    </form>
  )
}
