import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardCountry from "./CardCountry";
import TablePaginationDemo from "./Pagination";
import { CountryInfo } from "../type";

interface Prop {
  items: CountryInfo[];
}

const ListCountries = ({ items }: Prop) => {
  return (
    <Box sx={{ width: "100%" }}>
      <TablePaginationDemo />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items.map((item, index) => {
          return (
            <Grid item xs={3} key={index}>
              <CardCountry data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ListCountries;
