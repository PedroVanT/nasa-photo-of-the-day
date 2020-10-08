import React from "react";

const MediaContainer = (props) => {
  const { dataObj } = props;
  const { title, url, explanation } = dataObj;
  if (!dataObj) return <h3>Loading...</h3>;
  return (
    <div>
      <h2>{title}</h2>
      <img src={url} alt={title} />
      <p>{explanation}</p>
    </div>
  );
};

export default MediaContainer;
