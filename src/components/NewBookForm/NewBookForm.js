import React,{useContext,useState} from 'react';
import { BookContext } from '../context/BookContextProvider/BookContextProvider';

const NewBookForm = () => {
    const {addBook} = useContext(BookContext);
    let [title,setTitle] = useState(''),
        [author,setAuthor] = useState('');
    const SubmitForm=(e)=>{
        e.preventDefault();
        addBook(title,author);
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={SubmitForm}>
            <input 
                type="text" 
                value={title}
                placeholder="Add Title"
                required
                onChange={(e)=>setTitle(e.target.value)}/>
            <input 
                type="text" 
                value={author}
                placeholder="Add Author"
                required
                onChange={
                    (e)=>setAuthor(e.target.value)}/>
            <input type="submit" 
                    value="Add Book"/>
        </form>
     );
}
 
export default NewBookForm;