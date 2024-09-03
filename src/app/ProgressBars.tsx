import React from 'react';
import styled from 'styled-components';

// Define styled components
const GridContainer = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr);  // Two columns in desktop view
  gap: 80px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // One column in mobile view
  }
`;
const ProgressBarItem = styled.div`
  display: flex;
  flex-direction: row; // Default to row to keep image and bar side by side
  align-items: center;
  justify-content: start;

  @media (max-width: 768px) {
    flex-direction: row; // Keep the same row direction for mobile
    justify-content: space-between; // Adjust spacing if necessary
  }
`;

const StyledImage = styled.img`
width: 75px;
  height: 75px;
  margin-right: 10px; // Add some space between the image and the progress bar

  @media (max-width: 768px) {
    width: 50px;  // Optionally adjust the size for mobile
    height: 50px;
  }
`;

const ProgressBar = styled.div`
  flex-grow: 1; // Allow the progress bar to fill available space
  height: 20px;
  border-radius: 10px;
  background-color: #231C2F;

  @media (max-width: 768px) {
    width: auto;  // Adjust width to be automatic on mobile for flexibility
  }
`;

const Progress = styled.div`
  height: 100%;
  background-color: #458f67;
  border-radius: 10px;
  animation: glowing 2s ease-in-out infinite;
`;

// Props interfaces
interface ProgressBarData {
  imageSrc: string;
  percentage: number;
}

interface ProgressBarsProps {
  data: ProgressBarData[];
}

// Component Definition
const ProgressBars: React.FC<ProgressBarsProps> = ({ data }) => {
  return (
    <GridContainer>
      {data.map((item, index) => (
        <ProgressBarItem key={index}>
          <StyledImage src={item.imageSrc} alt="Progress Icon" />
          <ProgressBar>
            <Progress style={{ width: `${item.percentage}%` }} />
          </ProgressBar>
        </ProgressBarItem>
      ))}
    </GridContainer>
  );
};

export default ProgressBars;
