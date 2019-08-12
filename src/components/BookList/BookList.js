import React,{useContext} from 'react';
import { BookContext } from '../context/BookContextProvider/BookContextProvider';

const BookList = () => {
    const {books,removeBook} = useContext(BookContext);
    return ( 
        <ul className="book-list">
            {books.map( book => <li key={book.id} onClick={()=>removeBook(book.id)}>
                                    <h2>{book.title}</h2>
                                    <h5>{book.author}</h5>
                                    </li> )}
        </ul>
     );
}
 
export default BookList;