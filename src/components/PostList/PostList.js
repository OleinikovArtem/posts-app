import React from 'react'
import { Post } from './Post'

export const PostList = ({ view = 'grid', posts, favorites, toggleFavorites }) => {
  const type = view === 'grid' ? 3 : 2

  if (posts?.length === 0) {
    return (
      <div className={`uk-grid uk-child-width-1-2@s uk-child-width-1-${type}@m`}>
        <h1>Posts not found</h1>
      </div>
    )
  }

  return (
    <div className={`uk-grid uk-child-width-1-2@s uk-child-width-1-${type}@m`}>
      {
        posts.map(post => {
          const favorit = favorites.includes(post.id)
          return (
            <Post
              favorit={favorit}
              toggleFavorites={toggleFavorites}
              key={post.id}
              {...post}
            />)
        })
      }
    </div>
  )
}
