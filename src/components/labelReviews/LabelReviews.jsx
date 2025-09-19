import React from "react";
import "./labelReviews.css";
function LabelReviews({ name, review }) {
  return (
    <div className="labelReview">
      <div className="titleLabelReview">
        <h4 className="Title">{name}</h4>
      </div>
      <div className="paragraphLabelReview">
        <p className="Review">{review}</p>
      </div>
    </div>
  );
}

export default LabelReviews;
