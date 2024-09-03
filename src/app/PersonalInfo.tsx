import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  align-items: center;
  padding: 100px 20px;
  background-color: #FFFFFF;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // Switch to a single column layout
    padding: 50px 20px;  // Reduce padding for smaller screens
    text-align: center;  // Center the text for better aesthetics on mobile
  }
`;

const ProfileImage = styled.img`
  grid-column: 1 / 2;
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-left: 100px; // Specific for larger screens
  border-radius: 180px;

  @media (max-width: 768px) {
    margin-left: auto;  // Adjust to automatically align to center
    margin-right: auto;  // Adjust to automatically align to center
    max-width: 300px;  // Adjust the size of the image to fit smaller screens
  }
`;

const TextContainer = styled.div`
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    grid-column: 1;  // Have the text take up the full width under the image
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: #000000ff;

  @media (max-width: 768px) {
    margin-top: 20px;  // Add space between the image and title on smaller screens
  }
`;

const Description = styled.p`
  color: #000000ff;
`;

const PersonalInfo = () => {
  return (
    <InfoContainer>
      <ProfileImage src="/sylviaheadshot.png" alt="Headshot" />
      <TextContainer>
        <Title>Background</Title>
        <Description>This section highlights the companies I have worked for and the educational programs
         I have graduated from or am currently attending. Through these experiences, I have 
         gained a wealth of knowledge and continue to expand my skills and expertise.</Description>
      </TextContainer>
    </InfoContainer>
  );
};

export default PersonalInfo;
