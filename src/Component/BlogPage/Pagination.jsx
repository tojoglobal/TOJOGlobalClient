import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    const startPage = Math.max(
      1,
      Math.min(
        currentPage - Math.floor(maxPageButtons / 2),
        totalPages - maxPageButtons + 1
      )
    );

    for (
      let i = startPage;
      i < startPage + maxPageButtons && i <= totalPages;
      i++
    ) {
      pageNumbers.push(
        <li
          key={i}
          className={`page__numbers ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(
        <li key="dots-left" className="page__dots">
          ...
        </li>
      );
      pageNumbers.unshift(
        <li
          key={1}
          className="page__numbers"
          onClick={() => handlePageChange(1)}
        >
          1
        </li>
      );
    }

    if (startPage + maxPageButtons <= totalPages) {
      pageNumbers.push(
        <li key="dots-right" className="page__dots">
          ...
        </li>
      );
      pageNumbers.push(
        <li
          key={totalPages}
          className="page__numbers"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <ul className="page">
      <li
        className={`page__btn ${currentPage > 1 ? "active" : ""}`}
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
      >
        <FaChevronLeft />
      </li>
      {renderPageNumbers()}
      <li
        className={`page__btn ${currentPage < totalPages ? "active" : ""}`}
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
      >
        <FaChevronRight />
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
