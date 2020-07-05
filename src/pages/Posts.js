import React from 'react'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { Pagination } from '../components/Pagination'
import { LoadMore } from '../components/LoadMore'
import { PostList } from '../components/PostList/PostList'

export const Posts = ({ posts, view, toggleView,addFavorites,deleteFavorites,setOrder,setLimit}) => {
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
           view={view}
          deleteFavorites={deleteFavorites}
          addFavorites={addFavorites}
          posts={posts}
        />
        <LoadMore />
        <Pagination />
      </div>
    </div>
  )
}
