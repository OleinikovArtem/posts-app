import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Albums } from './pages/Albums'
import { Posts } from './pages/Posts'
import { Header } from './components/Header/Header'
import { getPosts } from './util/API'
import { Spinner } from './components/Spinner'





const App = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(6)
  const [view, setView] = useState('grid')
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [order, setOrder] = useState('asc')
  // const [error, setError] = useState(null)

  useEffect(() => {
    // get posts fetch Api
    setLoading(true)
    getPosts(setPosts, { page, limit})
    setLoading(false)
  }, [])

  useEffect(()=>{
    // get posts by limit 
    setLoading(true)
    getPosts(setPosts, { page, limit})
    setLoading(false)
  },[limit])


  useEffect(() => {
    // get total if posts.lenght changed
    setTotal(posts.length)
  }, [posts.length])


  const toggleView = (type) => {
    setView(type)
  }

  const addFavorites = (id,title) =>{
      const favorite = { id,title };
      setFavorites(favorites => [...favorites,favorite]);
  }

  const deleteFavorites = (id) =>{
    setFavorites(favorites => favorites.filter(favorite => favorite.id !== id));
  }

  const sortPosts = (order) => {
    return posts.sort((a,b)=>{ 
      switch (order) {
        case 'asc':
           return a.title > b.title ? 1 : -1;
          
        case 'desc':
           return a.title < b.title ? 1 : -1;
          
        default:
          break;
          
      }
    });
  }
  const sortedPosts = sortPosts(order)
  console.log('List of favorites',favorites);

  return (
    <main className='uk-main'>
      <Header favorites={favorites} deleteFavorites={deleteFavorites} />
      {
      loading ? <Spinner /> :
        (<Switch>
          <Route exact path='/posts-app' >
            <Posts 
              deleteFavorites={deleteFavorites}
              addFavorites={addFavorites}
              posts={sortedPosts} 
              view={view}
              toggleView={toggleView}
              setOrder={setOrder}
              setLimit={setLimit}
            />
          </Route>
          <Route exact path='/albums'>
            <Albums />
          </Route>
        </Switch>)
      }
    </main>
  )
}


export default App
