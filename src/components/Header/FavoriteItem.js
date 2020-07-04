import React from "react"

 export const FavoriteItem = ({title,id,deleteFavorites}) =>{
     const handleDelete = () => deleteFavorites(id);
            
    return(
        <tr>
                    <td>{title}</td>
                    <td className="uk-text-right">
                      <button
                        className="uk-button"
                        onClick={handleDelete}
                        type="button"
                        uk-icon="icon: close;"
                      />
                    </td>
                  </tr>
    )
}

