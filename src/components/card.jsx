import React from 'react';

const Card = ({ title, author, rating, publishYear }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Author: {author}
        </p>
        <p className="text-gray-700 text-base">
          Rating: {rating}
        </p>
        <p className="text-gray-700 text-base">
          Published: {publishYear}
        </p>
      </div>
    </div>
  );
};

export default Card;
