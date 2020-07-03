import React from 'react'

export const AlbumItem = () => {
  return (
    <div>
      <div
        className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container">
          <img src="https://picsum.photos/600/400" alt="true" uk-cover="true" />
          <canvas width={600} height={400} />
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
              Title <a href="/" className="uk-icon-link" uk-icon="heart" />
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt.
                </p>
            <a href="post.html" className="uk-button uk-button-text">
              Read more
                </a>
          </div>
        </div>
      </div>
    </div>
  )
}
