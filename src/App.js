import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Albums } from './pages/Albums'
import { Posts } from './pages/Posts'
import { Header } from './components/Header/Header'
import { getPosts } from './util/API'
import { Spinner } from './components/Spinner'


const App = () => {
  const [posts, setPosts] = useState([])
  const [total, setTotal] = useState(null)
  const [loading, setLoading] = useState(false)
  // const [favorites, setFavorites] = useState([])
  // const [limit, setlimit] = useState(6)
  // const [order, setOrder] = useState('asc')
  // const [view, setView] = useState('grid')
  // const [page, setPage] = useState(1)
  // const [error, setError] = useState(null)

  useEffect(() => {
    // get posts fetch Api
    setLoading(true)
    getPosts(setPosts)
    setLoading(false)
  }, [])

  useEffect(() => {
    // get total if posts.lenght changed
    setTotal(posts.length)
  }, [posts.length])



  console.log(posts)
  console.log(total)
  return (
    <main className='uk-main'>
      <Header />
      <Switch>
        <Route exact path='posts-app/' > 
          <Posts posts={posts} total={total}/>
        </Route>
        <Route exact path='posts-app/albums'>
          <Albums />
        </Route>
      </Switch>
    </main>
  )
}


export default App
