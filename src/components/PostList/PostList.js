import React from 'react'
import { Post } from './Post'

export const PostList = ({ view = 'grid', posts, favorites, toggleFavorites }) => {
  const type = view === 'grid' ? 3 : 2
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
