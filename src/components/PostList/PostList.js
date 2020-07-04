import React from 'react'
import { Post } from './Post'
import { PostWithImg } from './PostWithImg'




export const PostList = ({ view = 'grid', posts}) => {
  const type = view === 'grid' ? 3 : 2
  return (
    <div className={`uk-grid uk-child-width-1-2@s uk-child-width-1-${type}@m`}>
      {
        posts.map(post => <Post key={post.id} {...post}/>)
      }
    </div>
  )
}
