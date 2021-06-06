import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Avatar } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';

export function InformationModal({isModalVisible, setIsModalVisible}){
  const currentBook = useSelector(state => state && state.currentBook.data);


  function handleMore(){
    let url = `https://play.google.com/store/books/details?id=${currentBook.id}&rdid=book-${currentBook.id}&rdot=1&source=gbs_api`;
    window.open(url, "_blank");
  }

  function handleClose(){
    setIsModalVisible(false);
  }

  function renderBookAvatar(){
    let showIcon = false;

    if(!currentBook.volumeInfo.imageLinks)
      showIcon = true;
    else
      showIcon = false

    return(
      <Avatar className="image-modal" shape="square" size={100} src={!showIcon && currentBook.volumeInfo.imageLinks.thumbnail} icon={showIcon && <FileImageOutlined />}/>
    )
  }

  function renderBibliographicInformation(){
    let authors = currentBook.volumeInfo.authors.length > 1 ? currentBook.volumeInfo.authors.join(', ') : currentBook.volumeInfo.authors;
    let categories = currentBook.volumeInfo.categories ? currentBook.volumeInfo.categories : false;
    let publisher = currentBook.volumeInfo.publisher ? currentBook.volumeInfo.publisher : false;

    return(
      <div className="bibliographic-information">
        <h2> Informações Bibliográficas </h2>
        <p> <strong>Título: </strong> <span>{currentBook.volumeInfo.title}</span> </p>
        <p> <strong>Autor: </strong> <span>{authors}</span> </p>
        {categories && <p> <strong>Categoria:</strong> <span>{categories} </span> </p>}
        {publisher && <p> <strong>Editora:</strong> <span>{publisher} </span> </p>}
      </div>  
    )
  }

  return(
    <Modal 
      className="information-modal"
      title={currentBook.volumeInfo.title} 
      visible={isModalVisible} 
      onOk={handleMore} 
      okText="+" 
      onCancel={handleClose} 
      cancelText="Fechar"
    >
      <div className="content-modal">
        <div>
          {renderBookAvatar()}
        </div>
        <div className="description-book">
          <p> {currentBook.volumeInfo.authors} - {currentBook.volumeInfo.pageCount} páginas </p>
          <p> {currentBook.volumeInfo.description} </p>
        </div>
      </div>
      {renderBibliographicInformation()}
    </Modal>
  )
}