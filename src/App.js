import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Albums } from './pages/Albums'
import { Posts } from './pages/Posts'
import { Header } from './components/Header/Header'
import { getPosts } from './util/API'


const App = () => {
  const [posts, setPosts] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const [page, setPage] = useState(1)
  const [activePage, setActivePage] = useState(1)
  const [pages, setPages] = useState(null)
  const [limit, setLimit] = useState(6)
  const [view, setView] = useState('grid')
  const [isLoading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [order, setOrder] = useState('asc')
  const [total, setTotal] = useState(null)


  useEffect(() => {
    // get posts by limit 
    getPosts(
      setPosts,
      { activePage, limit, search: searchValue, order },
      setLoading,
      setTotal
    )
  }, [limit, activePage, searchValue, order])

  useEffect(() => {
    const pages = Math.round(total / limit)
    setPages(pages)
  }, [total, limit])

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

  const getSearchValue = (value) => {
    setSearchValue(value)
  }

  const handlePagination = (type) => {
    let updateActivePage = null

    switch (type) {
      case 'prev':
        updateActivePage = activePage === 1 ? activePage : activePage - 1
        break
      case 'next':
        updateActivePage = pages > activePage ? activePage + 1 : activePage
        break
      default:
        updateActivePage = type
    }
    setActivePage(updateActivePage)
  }


  return (
    <main className='uk-main'>
      <Header
        favorites={favorites}
        toggleFavorites={toggleFavorites}
        posts={posts}
      />
      <Switch>
        <Route exact path='/posts-app' >
          <Posts
            searchPosts={getSearchValue}
            favorites={favorites}
            toggleFavorites={toggleFavorites}
            posts={posts}
            view={view}
            toggleView={toggleView}
            setOrder={setOrder}
            setLimit={setLimit}
            isLoading={isLoading}
            pages={pages}
            handlePagination={handlePagination}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </Route>
        <Route exact path='/albums'>
          <Albums />
        </Route>
      </Switch>
    </main>
  )
}


export default App
