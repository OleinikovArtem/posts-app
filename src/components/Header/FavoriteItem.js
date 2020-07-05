import React from "react"

export const FavoriteItem = ({ title, id, toggleFavorites }) => {
  const handleDelete = () => toggleFavorites(id);

  return (
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

