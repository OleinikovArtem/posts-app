import React from 'react'
import { Navigation } from './Navigation'
import { Favorite } from './Favorite'

export const Header = ({favorites,deleteFavorites}) => {
  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar="true">
      <Navigation />
      <Favorite favorites={favorites} deleteFavorites={deleteFavorites} />
    </nav>
  )
}
