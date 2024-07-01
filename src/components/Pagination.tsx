import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { paginationProp } from "../type";

export default function TablePaginationDemo({
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  limit,
  count,
}: paginationProp) {
  // const [page, setPage] = React.useState(2);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  return (
    <TablePagination
      component="div"
      count={count}
      onPageChange={handleChangePage}
      page={page}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPage={limit}
      sx={{ mb: 5 }}
    />
  );
}
