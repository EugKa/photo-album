import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './base.scss'
import { Header, ImageListWithRouter } from './components'


export const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/:id" component={ImageListWithRouter}/>
      </Switch>
    </div>
  )
}
