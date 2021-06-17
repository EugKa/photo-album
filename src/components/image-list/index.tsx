import React from 'react'
import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { fetchData, addItemToFavorite, deleteItemFromFavorite } from '../../store/features';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IImage } from '../../types/image';

import Grid from '@material-ui/core/Grid';
import { ImageItem } from "../image-Item";
import { PaginationList } from '../pagination';


interface MatchParams {
  id: string;
}


const ImageList = ({match}: RouteComponentProps<MatchParams>) => {
  const [page, setPage] = React.useState(1);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.imagesSlice.data);
  const favorite = useAppSelector((state) => state.favoritesReducer);
  const status = useAppSelector((state) => state.imagesSlice.status);
  useEffect(() => {
    dispatch(fetchData({
      searchParam:match.params.id,
      page
    }))
  }, [dispatch, match.params.id, page])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(fetchData({
      searchParam:match.params.id,
      page
    }))
  };

  const selectItem = (item: IImage) => {
    const existingItem = favorite.find((el) => el.id === item.id)
    if(existingItem) {
      console.log('true');
      dispatch(deleteItemFromFavorite(item.id))
    } else {
      console.log('false');
      dispatch(addItemToFavorite(item)) 
    }  
  }


  if(!data) {
      return <div>
          loading
      </div>
  }
  return (
       <div>
          <Grid container spacing={1}>
              {data.map((item:IImage) => {
                  return <ImageItem 
                    key={item.id} 
                    item={item} 
                    selectItem={selectItem}
                  />
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
