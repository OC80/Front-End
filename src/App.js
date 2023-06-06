import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./jsx/Main";
import axios from "axios";
import "./scss/all.scss";
import Header from "./jsx/Header";

function App() {
  const [news, setNews] = useState(false);
  const [savedNews, setSavedNews] = useState([]);

  const getNews = async () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca70a0d8786d4acaaca4dcb02e4578e1"
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  // useEffect(() => {
  //   console.log(savedNews);
  // }, [savedNews]);

  return (
    <div className="page">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main news={news} setSavedNews={setSavedNews} savedNews={savedNews} />} />
          <Route
            path="/saved"
            element={<Main news={savedNews} setSavedNews={setSavedNews} savedNews={savedNews} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
