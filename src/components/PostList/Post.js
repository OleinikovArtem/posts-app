import React,{useState,useEffect} from 'react'
import { findAllByTestId } from '@testing-library/react';


export const Post = ({ id, title, body ,addFavorites,deleteFavorites}) => {
 const [color,setColor] = useState('#999')

  const handleToggle = () =>{
    if (color === '#999'){
      addFavorites(id,title) 
      setColor('red')
    } 

    if (color === 'red' ){
      deleteFavorites(id);
      setColor('#999')
    }
  };

   return (<div>
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
          {title} <a href="#" className="uk-icon-link" style={{color:color}} uk-icon="heart" onClick={handleToggle} />
        </h3>
      </div>
      <div className="uk-card-body">
        <p>
          {body}
        </p>
      </div>
      <div className="uk-card-footer">
        <a href="#" className="uk-button uk-button-text">
          Read more
                </a>
      </div>
    </div>
  </div>)
}
