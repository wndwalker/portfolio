import React from "react";
import { Grid, Typography } from "@mui/material";

import PaginationButtons from "@/components/PaginationButtons";
import HomeButtons from "@/components/HomeButtons";
import Download from "@/assets/Download.png";
import { downloadables } from "@/SampleData";

import "./styles.css";

const index = () => {
  const handlePageChange = (page) => {
    console.log("Current Page:", page);
  };

  return (
    <div className="downloadable">
      <Typography variant="h3">DOWNLOADABLE MATERIALS</Typography>
      <Grid container className="downloadable-container">
        <PaginationButtons itemsPerPage={2} onPageChange={handlePageChange}>
          {downloadables.map((category, index) => (
            <Grid item xs={6} key={index}>
              <h2>{category.category}</h2>
              {category.items.map((item, itemIndex) => (
                <Grid container spacing={2} key={itemIndex}>
                  <Grid item xs={3}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Download}
                        alt="Download"
                        className="downloadable-button"
                      />
                    </a>
                  </Grid>
                  <Grid item xs={8} textAlign={"start"}>
                    <Typography variant="body1"> {item.title}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          ))}
        </PaginationButtons>
      </Grid>
      <HomeButtons />
    </div>
  );
};

export default index;
