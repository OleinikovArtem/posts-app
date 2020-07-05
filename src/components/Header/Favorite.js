import React from 'react'
import { FavoriteItem } from "./FavoriteItem"

export const Favorite = ({ posts, favorites, toggleFavorites }) => {
  const favoritesItems = posts.filter(post => favorites.includes(post.id))
  return (
    <div className="uk-navbar-right">
      <div className="uk-navbar-item">
        <button
          className="uk-button"
          type="button"
          uk-icon="icon: heart; ratio: 2"
        />
        <div className="uk-width-large" uk-dropdown="mode: click">
          <div className="uk-dropdown-grid uk-child-width-1-1@m" uk-grid="true">
            <div>
              <table className="uk-table uk-table-divider uk-table-justify">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th className="uk-text-right">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    favoritesItems.map(favorit =>
                      <FavoriteItem key={favorit.id}
                        {...favorit}
                        toggleFavorites={toggleFavorites}
                      />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
