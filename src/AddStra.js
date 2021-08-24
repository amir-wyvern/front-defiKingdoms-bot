import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from '@material-ui/core/Paper';

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import UnfoldLessIcon from "@material-ui/icons/UnfoldLess";
import HistoryIcon from "@material-ui/icons/History";
import "react-datepicker/dist/react-datepicker.css";

import "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";



function Copyright() {
  const x = {
    marginTop: "1rem",
    padding: "1rem",
    bottom: "0",
    left: "0",
  };

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © WyVern"} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function AddStra(classes) {

  const [rsiTimeFrame, setRsiTimeFrame] = React.useState("1m");
  const [maTimeFrame, setMaTimeFrame] = React.useState("1m");

  const handleChangeRsiSelect = (event) => {
    setRsiTimeFrame(event.target.value);
  };

  const handleChangeMaSelect = (event) => {
    setMaTimeFrame(event.target.value);
  };

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
  };

  const [checked, setChecked] = React.useState(true);

  const handleDateChangeSeleced = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <main style={{ height: "10%" }} className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container component="main" maxWidth="100%">
          <CssBaseline />
          <div className={classes.paper}>
            <form className={classes.paper} noValidate>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Avatar className={classes.avatar}>
                  <UnfoldLessIcon />
                </Avatar>
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  component="h1"
                  variant="h5"
                >
                  RSI Confige
                </Typography>
              </div>
              <Grid container justifyContent="center" spacing={2} wrap="nowrap">
                <Grid item xs={3}>
                  <TextField
                    // variant="outlined"
                    margin="normal"
                    // required

                    fullWidth
                    id="rsi_lenght"
                    label="RSI Lenght"
                    name="rsi_lenght"
                    autoComplete="14"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    // variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                    id="rsi_buy"
                    label="RSI Buy"
                    name="rsi_buy"
                    autoComplete="30"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    // variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                    name="rsi_sell"
                    label="RSI Sell"
                    id="rsi_sell"
                    autoComplete="70"
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControl
                    margin="normal"
                    // required
                    fullWidth
                    id="time-frame-control"
                    autoComplete="70"
                  >
                    <InputLabel id="label-time-frame">Time Frame</InputLabel>
                    <Select
                      // labelId="time-frame-select-label"
                      id="time-frame-select-label"
                      value={rsiTimeFrame}
                      onChange={handleChangeRsiSelect}
                    >
                      <MenuItem value={"1m"}>1m</MenuItem>
                      <MenuItem value={"5m"}>5m</MenuItem>
                      <MenuItem value={"30m"}>30m</MenuItem>
                      <MenuItem value={"1h"}>1H</MenuItem>
                      <MenuItem value={"2h"}>2H</MenuItem>
                      <MenuItem value={"4h"}>4H</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
            <form className={classes.paper} noValidate>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Avatar className={classes.avatar}>
                  <ShowChartIcon />
                </Avatar>
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  style={{ marginTop: "10px" }}
                  component="h1"
                  variant="h5"
                >
                  Moving Avrage Confige
                </Typography>
              </div>

              <Grid container justifyContent="center" spacing={2} wrap="nowrap">
                <Grid item xs={5}>
                  <TextField
                    // variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                    id="ma_lenght"
                    label="MA_Lenght"
                    name="ma_lenght"
                    autoComplete="20"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={5}>
                  <FormControl
                    margin="normal"
                    // required
                    fullWidth
                    id="time-frame-control"
                    autoComplete="70"
                  >
                    <InputLabel id="label-time-frame">Time Frame</InputLabel>
                    <Select
                      // labelId="time-frame-select-label"
                      id="time-frame-select-label"
                      value={maTimeFrame}
                      onChange={handleChangeMaSelect}
                    >
                      <MenuItem value={"1m"}>1m</MenuItem>
                      <MenuItem value={"5m"}>5m</MenuItem>
                      <MenuItem value={"30m"}>30m</MenuItem>
                      <MenuItem value={"1h"}>1H</MenuItem>
                      <MenuItem value={"2h"}>2H</MenuItem>
                      <MenuItem value={"4h"}>4H</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
            <Paper>
            <form className={classes.paper} noValidate>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Checkbox
                  checked={checked}
                  onChange={handleDateChangeSeleced}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Avatar className={classes.avatar}>
                  <HistoryIcon />
                </Avatar>
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  style={{ marginTop: "10px" }}
                  component="h1"
                  variant="h5"
                >
                  Date & Clock
                </Typography>
              </div>

              <Grid
                container
                justifyContent="center"
                spacing={2}
                wrap="nowrap"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid item xs={5}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDateTimePicker
                      inputVariant="outlined"
                      disabled={!checked}
                      value={startDate}
                      onChange={handleStartDate}
                      label="Date & Time Start"
                      format="yyyy/MM/dd  -  HH:mm "
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid
                  item
                  xs={1}
                  style={{
                    display: "flex",
                    justifyContent: "bottom",
                    alignItems: "bottom",
                  }}
                >
                  <Typography component="h5" variant="h6">
                    To
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDateTimePicker
                      inputVariant="outlined"
                      disabled={!checked}
                      value={endDate}
                      onChange={handleEndDate}
                      label="Date & Time End"
                      format="yyyy/MM/dd  -  HH:mm"
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
            </form>
            </Paper>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit Strategy
            </Button>
          </div>

          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </>
  );
}
