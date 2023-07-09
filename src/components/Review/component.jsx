import React from "react";

export const Review = ({ review }) => {
  const { name, text, rating } = review;
  return (
    <div>
      <div></div>
      <div>
        <span>{name}</span>
        <span>{text}</span>
      </div>
      <div>{rating}</div>
    </div>
  );
};
