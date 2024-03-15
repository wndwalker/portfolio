import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { speakers } from "@/SampleData";

import "./styles.css";
import HomeButtons from "@/components/HomeButtons";

const index = () => {
  return (
    <div className="message">
      <Typography variant="h3">SEND MESSAGE TO MENTORS</Typography>
      <Box className="message-container">
        <Grid container>
          <Grid item xs={12} className="message-border">
            <Grid container alignItems={"center"} textAlign={"center"}>
              <Grid item xs={2}>
                <Typography variant="body1">Mentor</Typography>
              </Grid>
              <Grid item xs={10}>
                <Autocomplete
                  disablePortal
                  id="mentor"
                  options={speakers}
                  getOptionLabel={(option) => option.mentor}
                  sx={{ width: "100%" }}
                  renderInput={(params) => <TextField {...params} label="" />}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="message-border">
            <Grid container alignItems={"center"} textAlign={"center"}>
              <Grid item xs={2}>
                <Typography variant="body1">Subject</Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField id="subject" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="message-border">
            <TextField id="message" multiline rows={15} fullWidth />
          </Grid>
          <Grid
            item
            xs={12}
            className="message-border"
            sx={{ padding: "1rem 0 1rem 1rem" }}
          >
            <Button variant="contained" sx={{ width: "10rem" }}>
              SEND
            </Button>
          </Grid>
        </Grid>
      </Box>
      <HomeButtons />
    </div>
  );
};

export default index;
