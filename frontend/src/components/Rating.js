import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <FaStar color={color} />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt color={color} />
        ) : (
          <FaRegStar color={color} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar color={color} />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt color={color} />
        ) : (
          <FaRegStar color={color} />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar color={color} />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt color={color} />
        ) : (
          <FaRegStar color={color} />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar color={color} />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt color={color} />
        ) : (
          <FaRegStar color={color} />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar color={color} />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt color={color} />
        ) : (
          <FaRegStar color={color} />
        )}
      </span>
      <span className="p-1">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#D6AD60",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
