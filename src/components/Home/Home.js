import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import { InputSearch } from '../InputSearch/InputSearch';
import { BooksList } from '../BooksList/BooksList';
import { useSelector } from 'react-redux';

export function Home(){
  const books = useSelector(state => state.books && state.books.data);
  
  return(
    <div className="home">
      <header className="content-header">
        <GoogleOutlined role="icon-google" />

        <p className="google-books">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google" role="img-google" />
          <span id="books">Books</span>
        </p>
      </header>

      <main className="content-home">
        <InputSearch data-testid="teste"/>
        {books && <BooksList data-testid="books-list"/> }
      </main>
    </div>
  )
}