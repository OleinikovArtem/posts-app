import React from 'react'

export const ViewToggle = ({ toggleView }) => {
  return (
    <div className="uk-button-group uk-margin-left">
      <button className="uk-button uk-button-default uk-active"
        onClick={() => toggleView('grid')}
      >
        <span uk-icon="icon:  grid" />
      </button>
      <button className="uk-button uk-button-default"
        onClick={() => toggleView ('list') }
      >
        <span uk-icon="icon:  list" />
      </button>
    </div>
  )
}
