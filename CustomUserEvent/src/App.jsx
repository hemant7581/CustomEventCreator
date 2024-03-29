// src/App.js
// import React from 'react';
import Header from './Header';
import ImageEvent from './ImageEvent';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';

const imageEvents = [
  // ......stored image array and likes and dislikes..... 
  { imageUrl: image1, initialLikes: 10, initialDislikes: 5 },
  { imageUrl: image2, initialLikes: 5, initialDislikes: 1 },
  { imageUrl: image3, initialLikes: 2, initialDislikes: 4 },
  { imageUrl: image4, initialLikes: 5, initialDislikes: 7 },
];
// ......stored image array and likes and dislikes..... 

const App = () => {
  return (
    //............main logic start here..............
    <>
    <Header/>
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
    </>
  //............main logic end here..............
  );
};

export default App;
