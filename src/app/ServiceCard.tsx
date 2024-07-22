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
  max-width: 300px;
  margin: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 20px;
  flex: 1;
`;

const CardHeader = styled.h3`
  margin: 10px 0; 
  white-space: pre-line;
`;

const CardParagraph = styled.p`
  padding: 0 20px;
  margin-bottom: 40px;
`;

const CardButton = styled.button`
  background-color: #6c9d5f;
  color: white;
  border: none;
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
    background-color: #5a834f;
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
