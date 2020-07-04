import React from 'react'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { Pagination } from '../components/Pagination'
import { LoadMore } from '../components/LoadMore'
import { PostList } from '../components/PostList/PostList'

export const Posts = ({posts}) => {
  return (
    <div className="uk-section">
      <div className="uk-container">
        <FilterBar />
        <PostList posts={posts} total/>
        <LoadMore />
        <Pagination />
      </div>
    </div>
  )
}
