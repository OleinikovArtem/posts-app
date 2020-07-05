import React from 'react'

export const LoadMore = ({setLoadmore,loadmore}) => {
  const handleLoadmore = () => setLoadmore(loadmore => loadmore + 1)
  return (
    <div className="uk-margin">
      <button onClick={handleLoadmore} className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
        Load more{" "}
        <div className="uk-margin-small-left" uk-spinner="ratio: 0.6" />
      </button>
    </div>
  )
}
