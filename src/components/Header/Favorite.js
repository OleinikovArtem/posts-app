import React,{useState} from 'react'
import {FavoriteItem} from "./FavoriteItem"

export const Favorite = ({favorites,deleteFavorites}) => {

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
                    favorites.map(favorite=>
                      <FavoriteItem key={favorite.id} deleteFavorites={deleteFavorites} {...favorite} />
                    )
                  }
                  {/* <tr>
                    <td>Title 1</td>
                    <td className="uk-text-right">
                      <button
                        className="uk-button"
                        type="button"
                        uk-icon="icon: close;"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Title 2</td>
                    <td className="uk-text-right">
                      <button
                        className="uk-button"
                        type="button"
                        uk-icon="icon: close;"
                      />
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
