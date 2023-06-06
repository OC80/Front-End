import React from "react";
import Article from "./Article";

function Main({ news, setSavedNews, savedNews }) {
  const handleSaveNews = (savedNews) => {
    setSavedNews((prev) => {
      const hasItem = prev.some((obj) => obj.title === savedNews.title);

      if (!hasItem) return [savedNews, ...prev];

      const filtered = prev.filter((obj) => obj.title !== savedNews.title);
      return filtered;
    });
  };

  return (
    <div className="main">
      {news && news.length === 0 ? (
        <div className="empty">You have no saved articles</div>
      ) : news ? (
        <>
          {news.map((item, index) => (
            <Article
              key={`${index}-${item.title}`}
              item={item}
              handleSaveNews={handleSaveNews}
              isSave={savedNews.some((obj) => obj.title === item.title)}
            />
          ))}
        </>
      ) : (
        <div className="empty">Loading...</div>
      )}
    </div>
  );
}

export default Main;
