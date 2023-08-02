import React, { useState } from 'react';

function App() {

  const [images] = useState([
    { id: 1, url: 'image1.jpg'},
    { id: 2, url: 'image2.jpg'},
  ]);

  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  }
  
  const handleShareClick = () => {
    setShares(shares + 1);
  }

  return (
    <div className="image-grid">
      {images.map(image => (
        <div key={image.id}>
          <img src={image.url} alt="" />
          
          <button onClick={handleLikeClick}>
             👍{likes}
          </button>
          
          <button onClick={handleShareClick}>
             📤 {shares}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;