import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

import api from '../services/api';
import * as BooksActions from '../store/actions/books';

export function InputSearch(){
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);

  function handleChange(e){
    let value = e.target.value;
    setStartIndex(0);

    if(value)
      getBooks(value);
  }

  function getBooks(value){
    api.get(`volumes?q=${value}&startIndex=${startIndex}`)
    .then(res => {
      dispatch(BooksActions.showBookList(res.data.items))
    })
    .catch(err => {
      // criar/chamar página 404
      console.error('error ', err)
    })
  }
  
  return(
    <div className="search">
      <div className="content-search">
        <Input 
          size="large" 
          placeholder="Pesquise aqui..." 
          allowClear 
          onChange={handleChange}
        />
      </div>
    </div>
  )
}