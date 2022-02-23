import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



const App = () => {
  
 
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar color="#a6a7a8" progress={progress} />
        <Navbar />
        
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={6}
                country="us"
                category="general"
                heading="General"
              />
            }
          />
          
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={6}
                country="us"
                category="business"
                heading="Business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={6}
                country="us"
                category="entertainment"
                heading="Entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={6}
                country="us"
                category="health"
                heading="Health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={6}
                country="us"
                category="science"
                heading="Science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={6}
                country="us"
                category="sports"
                heading="Sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={6}
                country="us"
                category="technology"
                heading="Technology"
              />
            }
          />
        </Routes>
        
      </Router>
    </>
  );
};
export default App;
