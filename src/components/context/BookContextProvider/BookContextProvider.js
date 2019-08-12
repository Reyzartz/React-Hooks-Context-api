import React,{useState, createContext,useEffect } from 'react';

export const BookContext=createContext();

const BookContextProvider = (props) => {

    const [books,setBooks]=useState([
        ...JSON.parse(localStorage.getItem("books"))
    ])

    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books]);
    const addBook = (title,author)=>{
        setBooks([...books,{title,author,id:books.length+1}]);
    }
    const removeBook=(id)=>{
        setBooks([...books.filter(book=>book.id!==id)])
    }
    return ( 
        <BookContext.Provider value={{books,addBook,removeBook}}>
        {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;