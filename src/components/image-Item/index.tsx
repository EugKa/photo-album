import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { IImage } from '../../types/image'
import './index.scss'

interface Props {
    item: IImage
}
 
export const ImageItem = ({item}: Props) => {
    return (
        <Grid item xs={6} sm={4} md={4} className="card">
            <Paper
                className="card__image"
                style={{
                    backgroundImage: `url(${item.largeImageURL})`,
                }}
            />
            {/* <img 
                style={{width: '100%', height: '200px', display: 'block'}} 
                src={item.largeImageURL} 
                alt="photos" 
            /> */}
            <BookmarkBorderIcon className="card__btn"/>
        </Grid>
    )
}
