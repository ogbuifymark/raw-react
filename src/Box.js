import React, { Component } from 'react';
import './css/DottedBox.css';
import styles from './css/DashedBox.css';
import styled from 'styled-components';


const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};
export const DottedBox = () => (
    <div className="DottedBox">
      <p className="DottedBox_content">Get started with CSS styling</p>
    </div>
  );


export const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);
const DashedBox = () => (
    <div className={styles.container}>
      <p className={styles.content}>Get started with CSS Modules style</p>
    </div>
  );

  const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

export const OutsetBox = () => (
  <Div>
    <Paragraph>Get started with styled-components 💅</Paragraph>
  </Div>
);

// module.exports ={
//      OutsetBox: OutsetBox,
//     Box:Box,
//     DottedBox :DottedBox
// } 