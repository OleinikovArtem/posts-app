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
  const [limit, setlimit] = useState(6)
  const [view, setView] = useState('grid')
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(null)
  // const [favorites, setFavorites] = useState([])
  // const [order, setOrder] = useState('asc')
  // const [error, setError] = useState(null)

  useEffect(() => {
    // get posts fetch Api
    setLoading(true)
    getPosts(setPosts, { page, limit})
    setLoading(false)
  }, [])

  useEffect(() => {
    // get total if posts.lenght changed
    setTotal(posts.length)
  }, [posts.length])

  const toggleView = (type) => {
    setView(type)
  }

  return (
    <main className='uk-main'>
      <Header />
      {
      loading ? <Spinner /> :
        (<Switch>
          <Route exact path='/posts-app' >
            <Posts 
              posts={posts} 
              view={view}
              toggleView={toggleView}
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
