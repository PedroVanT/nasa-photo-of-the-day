import React from "react";

import styled from "styled-components";
// 105bd8
const ExplanationStyled = styled.div`
background-color: #061f4a;
padding-top:5px;
padding-bottom:5px;
p{
  max-width: 70%;
  margin-left:15%;
  font-size:1.1rem;
  color:#fae3f7;
}
h2{
  color:white;
}
`
const MediaContainer = (props) => {
  const { dataObj } = props;
  const { title, url, explanation } = dataObj;
  if (!dataObj) return <h3>Loading...</h3>;
  return (
    <ExplanationStyled>
      <h2>{title}</h2>
      <img src={url} alt={title} />
      <p>{explanation}</p>
    </ExplanationStyled>
  );
};

export default MediaContainer;
