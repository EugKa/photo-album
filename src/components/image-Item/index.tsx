import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { IImage } from '../../types/image'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import './index.scss'

interface Props {
    item: IImage;
    selectItem: (item: IImage)=> void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    },
  }),
);
 
export const ImageItem = ({item, selectItem}: Props) => {
    const classes = useStyles();
    return (
        <Grid item xs={6} sm={4} md={4} className="card">
            <Paper
                className={classes.paper}
                style={{
                    backgroundImage: `url(${item.largeImageURL})`,
                }}
            />
            <BookmarkBorderIcon 
                className="card__btn"
                onClick={() => selectItem(item)}
            />
        </Grid>
    )
}
