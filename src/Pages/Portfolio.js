import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import { AiFillCloseCircle } from "react-icons/ai";

function Portfolio() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  function Card(props) {
    return (
      <div className="p-4">
        <div className="hero card-zoom flex items-center justify-center">
          <div className="hero-content flex-col lg:flex-row">
            <img
              effect="blur"
              onClick={() => getImg(props.source)}
              src={props.source}
              alt="no_image"
              className="hover:scale-110 ease-out duration-200 max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    );
  }

  const [images, setImages] = useState([]);
  const [visibleImagesCount, setVisibleImagesCount] = useState(3);
  const observerElement = useRef(null);
  const observer = useRef(null);

  const loadMoreImages = () => {
    setVisibleImagesCount((prevCount) => prevCount + 3);
  };

  const handleScroll = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      loadMoreImages();
    }
  };

  useEffect(() => {
    fetch("/images.json")
      .then((result) => result.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (observerElement.current) {
      observer.current.observe(observerElement.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [visibleImagesCount, images]);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModal = () => {
    setModel(false);
    setTempImgSrc('');
  };

  return (
    <div>
      <Navbar />
      <div className={model ? "model open" : "model"}>
        <AiFillCloseCircle onClick={closeModal} className="close-icon" />
        <img src={tempImgSrc} alt="Modal content" />
      </div>
      <div className="min-h-screen p-10 mt-10">
        <div className="gallery">
          {images.slice(0, visibleImagesCount).map((card, index) => (
            <div key={index}>
              <Card source={card.location} />
            </div>
          ))}
        </div>
        {visibleImagesCount < images.length && (
          <div id="scroll-observer" ref={observerElement} className="h-1"></div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;










  







