import React from "react";
import { useGlobalContext } from "./context";
const News = () => {
  const { loading, hits, removeFunc } = useGlobalContext();
  console.log(hits);
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="news">
      {hits.map((news) => {
        const { author, objectID: id, title, url } = news;
        return (
          <article className="new" key={id}>
            <h4 className="title">{title}</h4>
            <p className="info">published by {author}</p>
            <div>
              <a href={url} className="read-more">
                read more
              </a>
              <button className="rmv-btn" onClick={() => removeFunc(id)}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default News;
