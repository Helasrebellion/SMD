"use client";

import React from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

const Card = styled.div`
  background-color: white;
  color: black;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px; // Default for mobile
  margin: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    max-width: 400px; // Increased width on desktops
  }
`;
const CardImage = styled.img`
  width: 100%;
  max-height: 300px;
`;

const CardContent = styled.div`
  padding-top: 0px;
  padding-bottom: 20px;
  flex: 1;
`;

const CardHeader = styled.h3`
  white-space: pre-line;
  padding-top:0px;
`;

const CardParagraph = styled.p`
  padding: 0 20px;
  margin-bottom: 80px;
`;

const CardButton = styled.button`
  background-color: #52d999ff;
  color: white;
  border: solid 1px #000000ff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #4e9a56ff;
  }

  i {
    font-size: 1.2em;
  }
`;

const ServiceCard: React.FC<{
  image: string;
  title: string[];
  description: string;
  buttonText: string;
}> = ({ image, title, description, buttonText }) => {
  return (
    <Card>
      <CardImage src={image} alt={title.join(" ")} />
      <CardContent>
        <CardHeader>
          {title.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </CardHeader>
        <CardParagraph>{description}</CardParagraph>
      </CardContent>
      <CardButton>
        <i className={buttonText}></i>
      </CardButton>
    </Card>
  );
};

export default ServiceCard;
