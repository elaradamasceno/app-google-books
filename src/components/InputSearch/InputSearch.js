import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';

import api from '../../services/api';
import * as BooksActions from '../../store/actions/books';

export function InputSearch(){
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage && state.currentPage.data);

  const [searchValue, setSearchValue] = useState('');

  function handleChange(e){
    let value = e.target.value;
    setSearchValue(value);

    if(value)
      getBooks(value, 0);
  }

  function getBooks(value, startIndex){
    api.get(`volumes?q=${value}&startIndex=${startIndex}`)
    .then(res => {
      dispatch(BooksActions.showBookList(res.data))
    })
    .catch(err => {
      console.error('error ', err)
    })
  }

  useEffect(() => {
    if(currentPage)
      getBooks(searchValue, currentPage - 1);

  }, [currentPage])
  
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