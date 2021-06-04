import React from 'react';
import { Input } from 'antd';

export function InputSearch(){
  return(
    <div className="search">
      <div className="content-search">
        <Input size="large" placeholder="Pesquise aqui..." allowClear />
      </div>
    </div>
  )
}