import React from "react";

function Article({ item, handleSaveNews, isSave }) {
  return (
    <div className="article">
      <img src={item.urlToImage} alt="" className="article-img" />

      <h2 className="article-title">{item.title}</h2>
      <p className="article-publish">Published on: {item.publishedAt}</p>

      <p className="article-description">{item.description}</p>
      <p className="article-author">Author: {item.author}</p>
      <p className="article-source">Source: {item.source.name}</p>

      <p className="article-readmore">
        Read more: <a href={item.url}>{item.title}</a>
      </p>

      {isSave ? (
        <button
          className="article-save"
          onClick={() => {
            handleSaveNews(item);
          }}
        >
          saved
        </button>
      ) : (
        <button
          className="article-save"
          onClick={() => {
            handleSaveNews(item);
          }}
        >
          save
        </button>
      )}
    </div>
  );
}

export default Article;
