/* eslint-disable react/prop-types */
// src/components/ImageEvent.js
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const ImageEvent = ({ imageUrl, initialLikes, initialDislikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [likeDate, setLikeDate] = useState(null);
  const [shareDate, setShareDate] = useState(null);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
    setLikeDate(new Date().toLocaleString());
  };

  const handleDislike = () => {
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  const handleShare = () => {
    setShareDate(new Date().toLocaleString());
   alert("Image has been shared...")
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imageUrl} alt="Event" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Event Image</div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button className="mr-2" onClick={handleLike}>
              <FontAwesomeIcon icon={faThumbsUp} className="text-blue-500" />
            </button>
            <span>{likes} Likes</span>
          </div>
          <div className="flex items-center">
            <button className="mr-2" onClick={handleDislike}>
              <FontAwesomeIcon icon={faThumbsDown} className="text-red-500" />
            </button>
            <span>{dislikes} Dislikes</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        {likeDate && <p>Liked on: {likeDate}</p>}
        {shareDate && <p>Shared on: {shareDate}</p>}
        {!likeDate && !shareDate && <p>No likes or shares yet.</p>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={handleShare}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default ImageEvent;
