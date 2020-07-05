import React from 'react'
import { Search } from './Search'
import { LimitFilter } from './LimitFilter'
import { SortFilter } from './SortFilter'
import { ViewToggle } from './ViewToggle'

export const FilterBar = ({ 
  toggleView, 
  setOrder, 
  setLimit, 
  view, 
  searchPosts,
  isLoading,
 }) => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <Search 
        searchPosts={searchPosts} 
        isLoading={isLoading}
      />

      <SortFilter setOrder={setOrder} />

      <LimitFilter setLimit={setLimit} />

      <ViewToggle
        toggleView={toggleView}
        view={view}
      />
    </div>
  )
}
