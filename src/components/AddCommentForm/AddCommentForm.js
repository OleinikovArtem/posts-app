import React, { useState, useEffect } from 'react'

const initialValue = { name: '', email: '', body: '' }

export const AddCommentForm = ({ addComment,  }) => {
  const [data, setData] = useState(initialValue)

  const changeValue = (e) => {
    e.preventDefault()
    const { value, name } = e.target
    const updateData = { ...data, [name]: value }
    setData(updateData)
  }

  const clearValue = () => {
    setData(initialValue)
  }


  const handleAddComment = (e) => {
    e.preventDefault()
    addComment({ ...data, id: new Date().getTime() })
    
  }


  return (
    <form action="#" className="uk-comment-form uk-margin-medium-top" onSubmit={handleAddComment} >
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Add Comment</legend>
        <div className="uk-margin">
          <input
            name={'name'}
            className="uk-input"
            type="text"
            placeholder="Name"
            required
            value={data.name}
            onChange={changeValue}
          />
        </div>
        <div className="uk-margin">
          <input
            name={'email'}
            className="uk-input"
            type="email"
            placeholder="Email"
            required
            value={data.email}
            onChange={changeValue}

          />
        </div>
        <div className="uk-margin">
          <textarea
            name={'body'}
            className="uk-textarea"
            rows={5}
            placeholder="Comment"
            required
            value={data.body}
            onChange={changeValue}

          />
        </div>
        <div className="uk-margin">
          <button className="uk-button uk-button-primary" type="submit">
            Post Comment
          </button>
        </div>
      </fieldset>
    </form>
  )
}
