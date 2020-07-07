import React from 'react'
import { Link } from 'react-router-dom'


export const Post = ({ id, title, body, toggleFavorites, favorit }) => {
  const activeStyle = favorit ? { color: 'red' } : {}
  
  return (<div>
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
          {title}
          <button
            style={activeStyle}
            className="uk-icon-link"
            uk-icon="heart"
            onClick={() => toggleFavorites(id)}
          />
        </h3>
      </div>
      <div className="uk-card-body">
        <p>
          {body}
        </p>
      </div>
      <div className="uk-card-footer">
        <Link to={`/posts-app/post/${id}`} className="uk-button uk-button-text">
          Read more
        </Link>
      </div>
    </div>
  </div>
  )
}
