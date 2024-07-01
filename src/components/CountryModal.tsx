import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import {
  CardActionArea,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import { CountryInfo } from "../type";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #1A2027",
  boxShadow: 24,
  p: 2,
  margin: "auto",
  flexGrow: 1,
};

interface CountryModal {
  itemSelected: CountryInfo;
  openModal: boolean;
  handleCloseModal: any;
  handleOpenModal: any;
}

const BasicModal = ({
  itemSelected,
  openModal,
  handleCloseModal,
}: CountryModal) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <ButtonBase sx={{ width: 600 }}>
                <Img alt="complex" src={itemSelected.flags?.png} />
              </ButtonBase>
              <Typography
                sx={{ mt: 5, textAlign: "center" }}
                variant="h5"
                component="div"
              >
                {itemSelected?.name.official}
              </Typography>
              <Typography
                sx={{ mt: 5, textAlign: "center" }}
                variant="h5"
                component="div"
              >
                {itemSelected?.name.common}
              </Typography>
              <Typography
                sx={{ mt: 5, textAlign: "center" }}
                variant="h5"
                component="div"
              >
                {itemSelected?.altSpellings.join(", ")}
              </Typography>
            </Grid>
            <Grid item md={6} xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1">Population</Typography>
                          </TableCell>
                          <TableCell>
                            {itemSelected?.population.toLocaleString()}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1">Area</Typography>
                          </TableCell>
                          <TableCell>
                            {itemSelected?.area.toLocaleString()} km
                            <sup>2</sup>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1">Timezones</Typography>
                          </TableCell>
                          <TableCell>
                            {itemSelected?.timezones.join(", ")}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1">Continents</Typography>
                          </TableCell>
                          <TableCell>
                            {itemSelected?.continents.join(", ")}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1">
                              Country Code
                            </Typography>
                          </TableCell>
                          <TableCell>
                            {itemSelected?.cca2} | {itemSelected?.cca3}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1">Native Name</Typography>
                          </TableCell>
                          <TableCell>
                            {itemSelected?.name?.nativeName &&
                              itemSelected?.cca3 && (
                                <>
                                  {itemSelected?.name.nativeName[
                                    itemSelected?.cca3.toLowerCase()
                                  ]
                                    ? itemSelected?.name.nativeName[
                                        itemSelected?.cca3.toLowerCase()
                                      ]?.official
                                    : itemSelected?.name.nativeName["eng"]
                                    ? itemSelected?.name.nativeName["eng"]
                                        ?.official
                                    : itemSelected?.name.nativeName["fra"]
                                        ?.official}
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
                            {itemSelected?.altSpellings.map((item, index) => (
                              <div key={index}>{item}</div>
                            ))}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1">
                              Country Code
                            </Typography>
                          </TableCell>
                          <TableCell>
                            {itemSelected?.idd.root} (Root) |{" "}
                            {itemSelected?.idd?.suffixes}
                            (Surface)
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  );
};

export default BasicModal;
