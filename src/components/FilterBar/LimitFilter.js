import React from 'react'

export const LimitFilter = ({setLimit}) => {
  return (
    <select onChange= {e => setLimit(e.target.value)} className="uk-select uk-width-small uk-margin-left">
      <option value={6}>6</option>
      <option value={12}>12</option>
      <option value={24}>24</option>
    </select>
  )
}
