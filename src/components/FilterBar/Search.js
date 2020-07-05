import React, { useState } from 'react'

export const Search = ({ searchPosts, isLoading }) => {
  const [value, setValue] = useState('')
  
  const changeValue = ({target: {value}}) => setValue(value.trim())

  const Spinner = (
    <span
      className="uk-search-icon uk-search-icon-flip"
      uk-spinner="ratio: 0.6"
    />
  )

  const handleSearch = (e) => {
    e.preventDefault()
    searchPosts(value)
  }

  return (
    <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right"
      onSubmit={handleSearch}
    >
      <span uk-search-icon="true" />
      {isLoading && Spinner }
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        value={value}
        onChange={changeValue}
      />
    </form>
  )
}
