import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import { CountryInfo } from "../type";

interface Props {
  data: CountryInfo;
}

const CardCountry = ({ data }: Props) => {
  return (
    <Card sx={{ maxWidth: 460 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data?.flags?.png}
          alt={data?.name.official}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.name.official}
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">Country Code</Typography>
                  </TableCell>
                  <TableCell>
                    {data?.cca2} | {data?.cca3}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">Native Name</Typography>
                  </TableCell>
                  <TableCell>
                    {data?.name?.nativeName && data.cca3 && (
                      <>
                        {data.name.nativeName[data.cca3.toLowerCase()]
                          ? data.name.nativeName[data.cca3.toLowerCase()]
                              ?.official
                          : data.name.nativeName["eng"]
                          ? data.name.nativeName["eng"]?.official
                          : data.name.nativeName["fra"]?.official}
                      </>
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">
                      Alternative Country Name
                    </Typography>
                  </TableCell>

                  <TableCell>
                    {data?.altSpellings.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">Country Code</Typography>
                  </TableCell>
                  <TableCell>
                    {data?.idd.root} (Root) | {data?.idd?.suffixes}
                    (Surface)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCountry;
