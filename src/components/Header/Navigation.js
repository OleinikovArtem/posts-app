import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className="uk-active">
          <NavLink to="/posts-app">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/albums">Albums</NavLink>
        </li>
      </ul>
    </div>
  )
}