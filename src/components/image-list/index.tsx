import React, {useEffect} from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { fetchData, addItemToFavorite, deleteItemFromFavorite } from '../../store/features';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IImage } from '../../types/image';
import { ImageItem } from "../image-Item";
import { PaginationList } from '../pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

interface MatchParams {
  id: string;
}


const ImageList = ({match, history}: RouteComponentProps<MatchParams>) => {
  const [page, setPage] = React.useState(1);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.imagesSlice.data);
  const status = useAppSelector((state) => state.imagesSlice.status);
  const favorite = useAppSelector((state) => state.favoritesReducer);
  
  history.listen(() => {
    setPage(1)
  })
  
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
      dispatch(deleteItemFromFavorite(item.id))
    } else {
      dispatch(addItemToFavorite(item)) 
    }  
  }


  if(status === 'pending') {
    return <CircularProgress/>
  }

  if(status === 'failed') {
    return <Alert severity="error">Что-то пошло не так. Пожалуйста попробуйте позже.</Alert>
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
