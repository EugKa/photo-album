import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { FavoriteList, Header, ImageListWithRouter } from './components'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import './base.scss'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '10px',
    },
  }),
);



export const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Header/>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/" component={FavoriteList}/>
          <Route path="/:id" component={ImageListWithRouter}/>    
        </Switch>
      </div>
    </div>
  )
}
