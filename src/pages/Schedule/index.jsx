import React from "react";
import PaginationButtons from "@/components/PaginationButtons";
import HomeButtons from "@/components/HomeButtons";

import Schedule1 from "@/assets/Schedule/Schedule1.png";
import Schedule2 from "@/assets/Schedule/Schedule2.png";
import Schedule3 from "@/assets/Schedule/Schedule3.png";
import Schedule4 from "@/assets/Schedule/Schedule4.png";
import Schedule5 from "@/assets/Schedule/Schedule5.png";
import Schedule6 from "@/assets/Schedule/Schedule6.png";
import Schedule7 from "@/assets/Schedule/Schedule7.png";
import Schedule8 from "@/assets/Schedule/Schedule8.png";

import "./styles.css";

const index = () => {
  const images = [
    Schedule1,
    Schedule2,
    Schedule3,
    Schedule4,
    Schedule5,
    Schedule6,
    Schedule7,
    Schedule8,
  ];
  return (
    <React.Fragment>
      <PaginationButtons itemsPerPage={1}>
        {images.map((data, index) => (
          <React.Fragment key={index}>
            <img src={data} alt="Image" className="schedule-image" />
          </React.Fragment>
        ))}
      </PaginationButtons>
      <HomeButtons />
    </React.Fragment>
  );
};

export default index;
