import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


interface Props {
  match: any;
  page: number;
  setPage: (page: number) => void;
  handleChange: any
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export const PaginationList = ({match, page, handleChange}:Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={10} page={page} onChange={handleChange}/>
        </div>
    )
}
