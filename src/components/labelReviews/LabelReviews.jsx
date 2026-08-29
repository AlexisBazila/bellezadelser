import React from "react";
import "./labelReviews.css";

function LabelReviews({ image, alt = "Review", borderColor }) {
  const style = borderColor ? { border: `1px solid ${borderColor}` } : undefined;

  return (
    <div className="labelReview" style={style}>
      <img src={image} alt={alt} className="reviewImage" />
    </div>
  );
}

export default LabelReviews;
