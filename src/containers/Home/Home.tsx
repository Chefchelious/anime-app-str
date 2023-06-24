import React from 'react';
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const Home = () => {
  const containerStyles: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    margin: '0 auto 0',
  };
  return (
    <div style={containerStyles}>
      <ImageSlider />
    </div>
  );
};

export default Home;