import React, { useState } from 'react'
import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { fetchData } from '../../store/features/images-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IImage } from '../../types/image';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ImageItem } from "../image-Item";
import { PaginationList } from '../pagination';


interface MatchParams {
    id: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const ImageList = ({match, location, history}: RouteComponentProps<MatchParams>) => {
  const [page, setPage] = React.useState(1);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.imagesSlice.data);
  const classes = useStyles();
  useEffect(() => {
    console.log('useImageRender');
    
    dispatch(fetchData({
      searchParam:match.params.id,
      page
    }))
  }, [dispatch, match.params.id, page])
  // console.log(`data`, data)
  // console.log(`match.params.id`, match.params.id)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(fetchData({
      searchParam:match.params.id,
      page
    }))
  };
  if(!data) {
      return <div>
          loading
      </div>
  }
  return (
       <div className={classes.root}>
          <Grid container spacing={1}>
              {data.map((item:IImage) => {
                  return <ImageItem key={item.id} item={item}/>
              })}    
          </Grid>
          <PaginationList 
            match={match.params.id} 
            page={page} 
            setPage={setPage} 
            handleChange={handleChange}/>
      </div>
  )
}

export const ImageListWithRouter = withRouter(ImageList);
