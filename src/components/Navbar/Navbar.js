import React,{ useContext} from 'react';
import { BookContext } from '../context/BookContextProvider/BookContextProvider';

const Navbar = () => {
    const {books}=useContext(BookContext);
    return ( 
        <nav>
            <h1>Book list</h1>
            <p>Currently You have {books.length} Books left</p>
        </nav>
     );
}
 
export default Navbar;
