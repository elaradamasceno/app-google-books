import React, {useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { Input } from 'antd';
import api from '../services/api';

export function InputSearch(){
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
      console.log('result ', res)
    })
    .catch(err => {
      // chamar página 404
      console.log('error ', err)
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