import React from "react";

const MediaTitle = (props) => {
  const { dataObj } = props;

  console.log(dataObj.date);
  if (!dataObj.date) return <h3>Loading...</h3>;
  return (
    <div>
      <h1>Picture Of The Day!</h1>
      <h3>Date</h3>
      <h3>{dataObj.date}</h3>
    </div>
  );
};

export default MediaTitle;
