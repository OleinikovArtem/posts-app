import React from 'react'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { Pagination } from '../components/Pagination'
import { LoadMore } from '../components/LoadMore'
import { AlbumList } from '../components/AlbumList/AlbumList'

export const Albums = () => {
  return (
    <div className="uk-section">
      <div className="uk-container">
        <FilterBar />
        <AlbumList />
        <LoadMore />
        <Pagination />
      </div>
    </div>
  )
}
