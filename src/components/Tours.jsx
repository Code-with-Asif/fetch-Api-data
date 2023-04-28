import React from "react";
import Tour from "./Tour";

const Tours = ({ myTours, removeTour }) => {
  return (
    <>
      <h1>Tours</h1>
      <div className="Tours">
        {myTours.map((myTour) => {
          return (
            <Tour key={myTour.id} myTour={myTour} removeTour={removeTour} />
          );
        })}
      </div>
    </>
  );
};

export default Tours;
