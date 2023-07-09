import { Review } from "@/components/Review/component";
import React from "react";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};
