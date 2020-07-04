import React from 'react'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { Pagination } from '../components/Pagination'
import { LoadMore } from '../components/LoadMore'
import { PostList } from '../components/PostList/PostList'

export const Posts = ({ posts, view, toggleView}) => {
  return (
    <div className="uk-section">
      <div className="uk-container">
        <FilterBar toggleView={toggleView}/>
        <PostList posts={posts} view={view} />
        <LoadMore />
        <Pagination />
      </div>
    </div>
  )
}
