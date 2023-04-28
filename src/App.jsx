import { useEffect, useState } from "react";
import React from "react";
import Tours from "./components/Tours";
import Loader from "./components/Loader";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
  if (isLoading === true) {
    return <Loader />;
  }
  if (myTours.length === 0) {
    return <button onClick={fetchTours}>Fetch Tours</button>;
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Tours myTours={myTours} removeTour={removeTour} />
        <Footer />
      </Router>
    </>
  );
};

export default App;
