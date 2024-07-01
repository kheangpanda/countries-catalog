import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardCountry from "./CardCountry";
import TablePaginationDemo from "./Pagination";
import { CountryInfo, paginationProp } from "../type";

interface Prop {
  items: CountryInfo[];
  page: number;
  limit: number;
  count: number;
  handleChangePage: any;
  handleChangeRowsPerPage: any;
}

const ListCountries = ({
  items,
  page,
  limit,
  count,
  handleChangePage,
  handleChangeRowsPerPage,
}: Prop) => {
  return (
    <Box sx={{ width: "100%" }}>
      <TablePaginationDemo
        page={page}
        limit={limit}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        count={count}
      />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="stretch"
      >
        {items.map((item, index) => {
          return (
            <Grid item xs={3} key={index} style={{ display: "flex" }}>
              <CardCountry data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ListCountries;
