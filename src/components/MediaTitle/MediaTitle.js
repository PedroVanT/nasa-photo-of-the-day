import React from "react";
import styled from "styled-components";
// 206be8 try this for background color of Header
// fff600
const Header = styled.div`
  background-color: #dce4ef;
  padding-top: 5px;
  padding-bottom: 5px;
  h1 {
    color: white;
    font-size: 2.6rem;
  }
  h3 {
    color: black;
  }
`;

const MediaTitle = (props) => {
  const { dataObj } = props;

  console.log(dataObj.date);
  if (!dataObj.date) return <h3>Loading...</h3>;
  return (
    <Header>
      <h1>Picture Of The Day!</h1>
      <h3>Date: </h3>
      <h3>{dataObj.date}</h3>
    </Header>
  );
};

export default MediaTitle;
