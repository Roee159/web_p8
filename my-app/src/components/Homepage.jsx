import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch images from the picsum.photos API
    const fetchImages = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5');
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex -mx-2">
            {imageData.map((image, index) => (
              <div key={index} className="w-full px-2">
                <img
                  className="carousel-img object-cover w-full h-64 md:h-80 lg:h-96 xl:h-120"
                  src={image.download_url}
                  alt={`Background ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
