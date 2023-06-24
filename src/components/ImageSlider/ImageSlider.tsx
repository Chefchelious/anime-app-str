import React, { useCallback, useEffect, useRef, useState } from 'react'
import {slides} from "../../constants";
import WatchItem from "../WatchItem/WatchItem";
export const ImageSlider = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [goToNext]);

  const sliderStyle: React.CSSProperties = {
    height: '100%',
    position: 'relative',
  };

  const slideStyle: React.CSSProperties = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.7s ease',
  };

  const leftArrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '50px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
  };
  const rigthArrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '50px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
  };

  const dotContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    cursor: 'pointer',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '25px',
    background: 'rgba(211, 211, 211, 0.64)',
    padding: '10px',
    borderRadius: '20px'
  };

  const dotStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    backgroundColor: 'black',
    borderRadius: '50%',
    justifyContent: 'center',
    position: 'relative',
    transition: 'background-color 0.7s ease',
  };

  const renderDotStyle = (slideIndex: number): React.CSSProperties => {
    if (slideIndex === currentIndex) {
      return { ...dotStyle, backgroundColor: 'gray' };
    }
    return dotStyle;
  };

  const onSlide = (idx: number) => setCurrentIndex(idx);

  return (
    <div style={sliderStyle}>
      <div style={leftArrowStyle} onClick={goToPrevious}>{'<'}</div>
      <div style={rigthArrowStyle} onClick={goToNext}>{'>'}</div>
      <div style={slideStyle} />
      <div style={dotContainerStyle}>
        {slides.map((_, slideIndex: number) => (
          <div
            key={slideIndex}
            style={renderDotStyle(slideIndex)}
            onClick={() => onSlide(slideIndex)}
            className='dot-slider'
          />
        ))}
      </div>
      <WatchItem key={slides[currentIndex].id} title={slides[currentIndex].title} info={slides[currentIndex].info} />
    </div>
  );
};

export default ImageSlider;
