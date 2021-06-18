import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import './index.scss'


interface Props {
  match: any;
  page: number;
  setPage: (page: number) => void;
  handleChange: any
}

export const PaginationList = ({match, page, handleChange}:Props) => {
    return (
        <div>
            <Pagination className="pagination" count={10} page={page} onChange={handleChange}/>
        </div>
    )
}
