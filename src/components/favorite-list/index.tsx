import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IImage } from '../../types/image';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { deleteItemFromFavorite } from '../../store/features';
import { ImageItem } from '../image-Item';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export const FavoriteList = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.favoritesReducer);
    const classes = useStyles();

    const selectItem = (item: IImage) => {
        dispatch(deleteItemFromFavorite(item.id))
      }

    if(data.length === 0) {
        return <h3>
            У вас нет избранных картинок
        </h3>
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {data.map((item:IImage) => {
                    return <ImageItem 
                        key={item.id} 
                        item={item}
                        selectItem={selectItem} 
                    />
                })}    
            </Grid>
        </div>
    )
}

