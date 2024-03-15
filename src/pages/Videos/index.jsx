import React from "react";

import PaginationButtons from "@/components/PaginationButtons";
import PlayNow from "@/assets/PlayNow.png";
import { videosOnDemands } from "@/SampleData";

import "./styles.css";
import { Box, Grid, Typography } from "@mui/material";
import HomeButtons from "@/components/HomeButtons";

const index = () => {
  const handlePageChange = (page) => {
    console.log("Current Page:", page);
  };

  return (
    <div className="videos">
      <Typography variant="h3" sx={{ paddingBottom: "1rem" }}>
        VIDEOS ON DEMAND
      </Typography>
      <Grid container>
        <PaginationButtons itemsPerPage={10} onPageChange={handlePageChange}>
          {videosOnDemands.map((data, index) => (
            <Grid item xs={6} key={index}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="h6">{data.date}</Typography>
                  {data.program.map((program, index) => (
                    <Box key={index} sx={{ pb: 2 }}>
                      <Typography variant="body1"> {program.title}</Typography>
                      <Typography variant="body1"> {program.name}</Typography>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={8}>
                  <a href={data.link}>
                    <img src={PlayNow} alt="Videos" className="videos-button" />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </PaginationButtons>
      </Grid>
      <HomeButtons />
    </div>
  );
};

export default index;
