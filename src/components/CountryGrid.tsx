import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardCountry from "./CardCountry";
import TablePaginationDemo from "./Pagination";

const ListCountries = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TablePaginationDemo />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <CardCountry />
        </Grid>
        <Grid item xs={3}>
          <CardCountry />
        </Grid>
        <Grid item xs={3}>
          <CardCountry />
        </Grid>
        <Grid item xs={3}>
          <CardCountry />
        </Grid>
        <Grid item xs={3}>
          <CardCountry />
        </Grid>
        <Grid item xs={3}>
          <CardCountry />
        </Grid>
        <Grid item xs={3}>
          <CardCountry />
        </Grid>
        <Grid item xs={3}>
          <CardCountry />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListCountries;
