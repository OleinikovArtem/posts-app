import React, { useState, useEffect } from 'react'
import { CommentsList } from '../components/ComentsList/CommentsList'
import { AddCommentForm } from '../components/AddCommentForm/AddCommentForm'
import { getPost, postComment } from '../util/API'
import { withRouter } from 'react-router-dom'


const PostPage = ({ match: { params } }) => {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
    getPost(setPost, params.id)
  }, [])

  useEffect(() => {
    setComments(post?.comments)
  }, [post])

  const addComment = async (comment) => {
    await postComment(setStatus, comment)
    if (status) {
      console.log('ok')
      setComments([...comments, comment])
    }
  }

  return (
    <div className="uk-section">
      <div className="uk-container">
        <h1 className="uk-heading-bullet uk-margin-medium-bottom">
          <span>{post?.title} </span>
          <a className="uk-text-small" href="#">
            Author
        </a>
        </h1>
        <div className="uk-article uk-dropcap uk-margin-large-bottom">
          <p>
            {post?.body}
          </p>
        </div>
        <hr />
        <h3 className="uk-margin-remove-top">Comments:</h3>
        <CommentsList comments={comments} />
        <AddCommentForm addComment={addComment} />
      </div>
    </div>
  )
}

export const Post = withRouter(PostPage)