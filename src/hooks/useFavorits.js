import { useReducer } from 'react'
const initialState = [
  { id: 1, title: 'title', postId: 1 },
  { id: 2, title: 'title 3', postId: 3 },
  { id: 3, title: 'title 55', postId: 55 },
]

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_FAVORIT':
      return [...state, { ...payload, id: new Data().getTime() }]
    case 'DELETE_FAVORIT':
      return [...state, { ...payload, id: new Data().getTime() }]
    default:
      return state
  }
}

const useFavorites = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addFavorit = ({ title, postId}) => {
    dispatch({ type: 'ADD_FAVORIT', payload: { title, postId}})
  }

  
}