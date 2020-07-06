import React, { Fragment } from 'react'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { Pagination } from '../components/Pagination'
import { LoadMore } from '../components/LoadMore'
import { PostList } from '../components/PostList/PostList'
import { Spinner } from '../components/Spinner'

export const Posts = ({
  posts,
  view,
  toggleView,
  favorites,
  toggleFavorites,
  setOrder,
  setLimit,
  searchPosts,
  isLoading,
  pages,
  handlePagination,
  activePage,
  setActivePage,
}) => {
  return (
    <div className="uk-section">
      <div className="uk-container">
        <FilterBar
          setOrder={setOrder}
          toggleView={toggleView}
          view={view}
          setLimit={setLimit}
          isLoading={isLoading}
          searchPosts={searchPosts}

        />
        {
          isLoading ? (<Spinner />) : (
            <Fragment>
              <PostList
                favorites={favorites}
                toggleFavorites={toggleFavorites}
                view={view}
                posts={posts}
              />
              <LoadMore />
              <Pagination 
                pages={pages}
                handlePagination={handlePagination}
                activePage={activePage}
                setActivePage={setActivePage} 
              />
            </Fragment>
          )

        }
      </div>
    </div>
  )
}
