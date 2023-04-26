import { useEffect, useState } from "react";
import React from "react";
import Tours from "./Tours";
import Loader from "./Loader";

const App = () => {
  const url = "https://course-api.com/react-tours-project";
  const [myTours, setMyTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const removeTour = (id) => {
    const singleTour = myTours.filter((myTours) => myTours.id !== id);
    setMyTours(singleTour);
  };
  const fetchTours = async () => {
    setIsLoading(true);
    const data = await fetch(url);
    const res = await data.json();

    setMyTours(res);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading == true) {
    return <Loader />;
  }
  if (myTours.length === 0) {
    return <button onClick={fetchTours}>Fetch Tours</button>;
  }

  return (
    <React.Fragment>
      <Tours myTours={myTours} removeTour={removeTour} />
    </React.Fragment>
  );
};

export default App;
