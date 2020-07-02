import React from 'react'

export const ViewToggle = () => {
  return (
    <div className="uk-button-group uk-margin-left">
      <button className="uk-button uk-button-default uk-active">
        <span uk-icon="icon:  grid" />
      </button>
      <button className="uk-button uk-button-default">
        <span uk-icon="icon:  list" />
      </button>
    </div>
  )
}
