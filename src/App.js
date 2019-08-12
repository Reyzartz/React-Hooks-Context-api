import React from 'react';
import BookContextProvider from './components/context/BookContextProvider/BookContextProvider';
import BookList from './components/BookList/BookList';
import Navbar from './components/Navbar/Navbar';
import NewBookForm from './components/NewBookForm/NewBookForm';
function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <Navbar/>
      <BookList/>
      <NewBookForm/>
    </BookContextProvider>
    </div>
  );
}

export default App;
