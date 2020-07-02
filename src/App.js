import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Albums } from './pages/Albums'
import { Posts } from './pages/Posts'
import { Header } from './components/Header/Header'


function App() {
  return (
    <main className='uk-main'> 
      <Header/>
      <Switch>
        <Route exact path='/' component={Posts} />
        <Route exact path='/albums' component={Albums} />
      </Switch>
    </main>
  )
}

export default App
