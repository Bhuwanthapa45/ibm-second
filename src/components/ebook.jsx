import React from 'react'

const Ebook = ({ title, coverImage, author }) => {
  return (
    <div className="bg-zinc-800 border-zinc-600 rounded-lg shadow p-4 m-2 flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <img src={coverImage} alt={`${title} cover`} className="w-32 h-48 object-cover mb-4 rounded-md" />
      <p className="text-gray-600 mb-4">{author}</p>
      <button className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
        Get Book
      </button>
    </div>
  );
};

export default Ebook;
