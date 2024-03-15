import React, { useState } from "react";

import Next from "@/assets/Next.png";
import Previous from "@/assets/Previous.png";
import "./styles.css";

const PaginationButtons = ({ children, itemsPerPage = 2, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(children.length / itemsPerPage);

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(nextPage);
    onPageChange(nextPage);
  };

  const handlePreviousPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
    onPageChange(prevPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, children.length);
  const currentItems = children.slice(startIndex, endIndex);

  return (
    <React.Fragment>
      <React.Fragment>
        {currentItems.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))}
      </React.Fragment>
      <div className="pagination">
        <img
          src={Previous}
          onClick={handlePreviousPage}
          hidden={currentPage === 1}
          className="pagination-button"
        />
        <img
          src={Next}
          onClick={handleNextPage}
          hidden={currentPage === totalPages}
          className="pagination-button"
        />
      </div>
    </React.Fragment>
  );
};

export default PaginationButtons;
