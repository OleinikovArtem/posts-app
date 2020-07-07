import React, { useState, useEffect } from 'react'
import { Comment } from './Comment'

export const CommentsList = ({ comments }) => {

  return (
    <div className="uk-comments">
      {
        comments?.map((comment) => <Comment key={comment.id} {...comment} />)}
    </div>

  )
}
