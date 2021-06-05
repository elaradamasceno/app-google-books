import React from 'react';
import { Modal } from 'antd';

export function InformationModal({isModalVisible}){
  function handleMore(){
    
  }

  function handleClose(){
    
  }

  return(
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleMore} onCancel={handleClose} okText="+" cancelText="Fechar">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}