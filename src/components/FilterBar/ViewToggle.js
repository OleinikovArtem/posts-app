import React from 'react'

export const ViewToggle = ({ toggleView,view}) => {

  return (
    <div className="uk-button-group uk-margin-left">
      <button className={"uk-button uk-button-default" + (view === 'grid' && ' uk-active')}
        onClick={() => toggleView('grid')}
      >
        <span uk-icon="icon:  grid" />
      </button>
      <button className={"uk-button uk-button-default" + (view === 'list' && ' uk-active')}
        onClick={() => toggleView('list') }
      >
        <span uk-icon="icon:  list" />
      </button>
    </div>
  )
}
