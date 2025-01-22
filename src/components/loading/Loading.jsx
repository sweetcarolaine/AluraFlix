import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import "./Loading.scss";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simulateDelay = async() => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    };

    simulateDelay();
  }, []);


  
  return (
    <div className={`loading-container ${isLoading ? 'fade-in' : 'fade-out'}`}>
      <ClipLoader color="#2271D1" className={`loading-content ${isLoading ? 'fade-out' : 'fade-in-grow'}`} size={160} />
    </div>
  );
}

export default Loading;
