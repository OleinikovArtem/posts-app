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
  const [favorites, setFavorites] = useState([])
  const [order, setOrder] = useState('asc')
  // const [total, setTotal] = useState(null)
  // const [error, setError] = useState(null)

  useEffect(() => {
    // get posts by limit 
    setLoading(true)
    getPosts(setPosts, { page, limit })
    setLoading(false)
  }, [limit, page])


  // useEffect(() => {
  //   // get total if posts.lenght changed
  //   setTotal(posts.length)
  // }, [posts.length])

  const toggleView = type => setView(type)

  const toggleFavorites = id => {
    let updateFavorites = []
    if (favorites.includes(id)) {
      updateFavorites = favorites.filter(favoritId => favoritId !== id)
    } else {
      updateFavorites = [...favorites, id]
    }
    setFavorites(updateFavorites);
  }


  const sortPosts = (order) => {
    return posts.sort((a, b) => {
      switch (order) {
        case 'desc':
          return a.title < b.title ? 1 : -1;
        default:
          return a.title > b.title ? 1 : -1;
      }
    });
  }
  const sortedPosts = sortPosts(order)
  console.log('List of favorites', favorites);

  return (
    <main className='uk-main'>
      <Header
        favorites={favorites}
        toggleFavorites={toggleFavorites}
        posts={posts}
      />
      {
        loading ? <Spinner /> :
          (<Switch>
            <Route exact path='/posts-app' >
              <Posts
                favorites={favorites}
                toggleFavorites={toggleFavorites}
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
