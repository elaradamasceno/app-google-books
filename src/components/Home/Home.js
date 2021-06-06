import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import { InputSearch } from '../InputSearch/InputSearch';
import { BooksList } from '../BooksList/BooksList';

export function Home(){
  
  return(
    <div className="home">
      <header className="content-header">
        <GoogleOutlined />

        <p className="google-books">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google" />
          <span id="books">Books</span>
        </p>
      </header>

      <main className="content-home">
        <InputSearch />
        <BooksList />
      </main>
    </div>
  )
}