import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: #FFFFFF; // Adjust the background color as needed
  color: #000000ff; // Adjust the text color as needed

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // Two columns on tablets
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // One column on mobile
  }
`;

const OrganizationLogo = styled.img`
  width: 200px;
  height: 200px;
  @media (max-width: 480px) {
    width: 150px; // Smaller logos on mobile for better fit
    height: 150px;
  }
`;

const OrganizationName = styled.p`
  font-weight: bold;
  text-align: center;
`;

const OrganizationRole = styled.p`
  text-align: center;
  font-size: smaller;
`;

const ProfessionalGallery = () => {
  return (
    <GalleryContainer>
      <div>
        <OrganizationLogo src="/redhawk-icon.png" alt="Company Logo" />
        <OrganizationName>Red Hawk Technologies</OrganizationName>
        <OrganizationRole>Software Engineer</OrganizationRole>
      </div>
      <div>
        <OrganizationLogo src="/gatewaylogo.webp" alt="University Logo" />
        <OrganizationName>Gateway Community & Technical College</OrganizationName>
        <OrganizationRole>Alumni</OrganizationRole>
      </div>
      <div>
        <OrganizationLogo src="/wgu.jpg" alt="University Logo" />
        <OrganizationName>Western Governors University</OrganizationName>
        <OrganizationRole>Currently Enrolled</OrganizationRole>
      </div>
      <div>
        <OrganizationLogo src="/codeyoulogo.jpg" alt="University Logo" />
        <OrganizationName>Code:You</OrganizationName>
        <OrganizationRole>Alumni</OrganizationRole>
      </div>
    </GalleryContainer>
  );
};

export default ProfessionalGallery;
