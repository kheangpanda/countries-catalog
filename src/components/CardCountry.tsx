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

import { fetchGetCountries } from "../api";

interface iddProp {
  root: string;
  suffixes: string[];
}

type CountryInfo = {
  name: string;
  flagImg: string;
  cca2: string;
  cca3: string;
  nativeName: string;
  altSpellings: string[];
  idd: iddProp;
};

const CardCountry = () => {
  const [data, setData] = useState<CountryInfo>();

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchGetCountries();
      console.log(data[0]);
      const resultData = {
        name: data[0].name.official,
        nativeName: data[0].name.nativeName.fra.official,
        flagImg: data[0].flags.png,
        cca2: data[0].cca2,
        cca3: data[0].cca3,
        altSpellings: data[0].altSpellings,
        idd: data[0].idd,
      };

      setData(resultData);
    };
    getCountries();
  }, []);
  return (
    <Card sx={{ maxWidth: 460 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data?.flagImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.name}
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
                  <TableCell>{data?.nativeName}</TableCell>
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
                    {data?.idd.root} (Root) | {data?.idd.suffixes.join(" ")}{" "}
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
