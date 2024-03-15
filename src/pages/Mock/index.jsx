import React from "react";
import { Button, Grid, Typography } from "@mui/material";

import PaginationButtons from "@/components/PaginationButtons";
import HomeButtons from "@/components/HomeButtons";
import ExamButtonActive from "@/assets/Pages/ExamButtonActive.png";
import { mockExams } from "@/SampleData";

import "./styles.css";

const index = () => {
  return (
    <div className="mock">
      <Typography variant="h3">MOCK BOARD EXAMINATIONS</Typography>
      <Typography variant="h4">Note:</Typography>
      <Typography variant="h5">
        Wait for the instruction from the faculty for the availability of the
        mock board examination
      </Typography>
      <div className="mock-container">
        <PaginationButtons itemsPerPage={4}>
          {mockExams.map((data, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h5">{data.date}</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ paddingTop: "8px !important" }}>
                    <Typography variant="h6">{data.title}</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ paddingTop: "0px !important" }}>
                    <Typography variant="h6">{data.name}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <a href={data.link} target="_blank">
                  <img
                    src={ExamButtonActive}
                    alt="Button"
                    className="mock-button"
                  />
                </a>
              </Grid>
            </Grid>
          ))}
        </PaginationButtons>
      </div>
      <HomeButtons />
    </div>
  );
};

export default index;
