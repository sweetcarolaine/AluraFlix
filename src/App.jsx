import React, { lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const NewVideo = lazy(() => import("./pages/NewVideo"));
const FormPage = lazy(() => import("./pages/FormPage"));
const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simulateDelay = async() => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1200); 
    };

    simulateDelay();
  }, []);


  return (
    <div>
        {isLoading && (<Loading />)}
        {!isLoading && (<BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-video" element={<NewVideo />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        )}
    </div>
  );
}

export default App;
