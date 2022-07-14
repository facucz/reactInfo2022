import * as React from 'react';
import Pagination from '@mui/material/Pagination';

function Pages(props) {
  return (
    <Pagination
      count={props.totalPages}
      onChange={(event, page) => {
        props.paginate(page)
      }}
      page={props.page}
    />
  );
}
export default Pages;
