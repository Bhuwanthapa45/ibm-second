
import React, { useEffect, useState } from 'react';
// Ensure this is your fetchBooks function
import Card from './card'; // Import the Card component
import { fetchBooks } from '../api/fetchbook';

const Ebook = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const loadBooks = async () => {
        try {
          const data = await fetchBooks();
          setBooks(data.books || []);
        } catch (err) {
          setError(err.message);
        }
      };
      loadBooks();
    }, []);
  return (
    <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold text-center my-4">Book Cards</h1>
    {error && <p className="text-red-500 text-center">{error}</p>}
    <div className="flex flex-wrap justify-center">
      {books.map((book, index) => (
        <Card
          key={index}
          title={book.title}
          author={book.author}
          rating={book.rating}
          publishYear={book.publishYear}
        />
      ))}
    </div>
  </div>
  )
}
export default Ebook;
        
       


 
