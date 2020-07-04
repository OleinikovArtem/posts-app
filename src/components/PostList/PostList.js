import React from 'react'
import { Post } from './Post'
import { PostWithImg } from './PostWithImg'

export const PostList = ({posts}) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {
        posts.map(post => <Post key={post.id} {...post}/>)
      }
    </div>
  )
}
