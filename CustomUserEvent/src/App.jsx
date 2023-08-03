// src/App.js
// import React from 'react';
import ImageEvent from './ImageEvent';
import image1 from './image1.jpg';
import image2 from './image2.jpg';

const imageEvents = [
  { imageUrl: image1, initialLikes: 10, initialDislikes: 5 },
  { imageUrl: image2, initialLikes: 5, initialDislikes: 1 },
];

const App = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-2 gap-4">
        {imageEvents.map((event, index) => (
          <ImageEvent
            key={index}
            imageUrl={event.imageUrl}
            initialLikes={event.initialLikes}
            initialDislikes={event.initialDislikes}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
