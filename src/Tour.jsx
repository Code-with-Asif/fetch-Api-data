import React, { useState } from "react";

const Tour = ({ myTour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="content">
      <img src={myTour.image} alt="tours" />
      <h1>{myTour.name}</h1>
      <p>
        {readMore ? myTour.info : myTour.info.substring(0, 100)}...
        <br />
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
      <h5>Price: {myTour.price}</h5>
      <button onClick={() => removeTour(myTour.id)}>Remove</button>
    </div>
  );
};

export default Tour;
