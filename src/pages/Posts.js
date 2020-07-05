import React from 'react'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { Pagination } from '../components/Pagination'
import { LoadMore } from '../components/LoadMore'
import { PostList } from '../components/PostList/PostList'

export const Posts = ({ 
  posts, 
  view, 
  toggleView, 
  favorites, 
  toggleFavorites, 
  setOrder, 
  setLimit 
}) => {
  return (
    <div className="uk-section">
      <div className="uk-container">
        <FilterBar
          setOrder={setOrder}
          toggleView={toggleView}
          view={view}
          setLimit={setLimit}
        />
        <PostList
          favorites={favorites}
          toggleFavorites={toggleFavorites}
          view={view}
          posts={posts}
        />
        <LoadMore />
        <Pagination />
      </div>
    </div>
  )
}
