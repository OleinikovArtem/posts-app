import React from 'react'

export const LoadMore = () => {
  return (
    <div className="uk-margin">
      <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
        Load more{" "}
        <div className="uk-margin-small-left" uk-spinner="ratio: 0.6" />
      </button>
    </div>
  )
}
