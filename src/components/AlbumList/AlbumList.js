import React from 'react'
import { AlbumItem } from './AlbumItem'

export const AlbumList = () => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
    </div>
  )
}
