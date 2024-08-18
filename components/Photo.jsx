
import React from 'react';

const Photo = () => {
  return (
    <div className="flex justify-center">
      <img 
        src="welcome.png" 
        alt="Aniruddh Krovvidi" 
        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-[440px] xl:h-[440px] object-cover"
      />
    </div>
  );
};

export default Photo;
