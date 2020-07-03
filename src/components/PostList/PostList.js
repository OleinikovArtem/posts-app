import React from 'react'
import { Post } from './Post'
import { PostWithImg } from './PostWithImg'

export const PostList = () => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
