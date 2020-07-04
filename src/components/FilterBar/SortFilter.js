import React from 'react'

export const SortFilter = ({setOrder}) => {
  return (
    <select onChange={ e => setOrder(e.target.value)} className="uk-select uk-width-small uk-margin-auto-left">
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  )
}
