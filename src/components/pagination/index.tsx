import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination'
import { useAppDispatch } from '../../store/hooks';
import { fetchData } from '../../store/features/images-slice';
import { RouteComponentProps, withRouter } from 'react-router-dom';

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
    const dispatch = useAppDispatch();
  
    return (
        <div className={classes.root}>
            <Pagination count={10} page={page} onChange={handleChange}/>
        </div>
    )
}

// export const PaginationList = withRouter(PaginationListWrapper);
