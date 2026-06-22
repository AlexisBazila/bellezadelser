import React from "react";
import "./labelReviews.css";

function LabelReviews({ image, alt = "Review" }) {
  return (
    <div className="labelReview">
      <img src={image} alt={alt} className="reviewImage" />
    </div>
  );
}

export default LabelReviews;
