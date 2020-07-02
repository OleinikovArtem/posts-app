import React from 'react'
import { Search } from './Search'
import { LimitFilter } from './LimitFilter'
import { SortFilter } from './SortFilter'
import { ViewToggle } from './ViewToggle'

export const FilterBar = () => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
     <Search />
      <SortFilter />
      <LimitFilter />
      <ViewToggle />
    </div>
  )
}
