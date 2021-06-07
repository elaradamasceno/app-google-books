import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { Card, Pagination, message  } from 'antd';
import { FileImageOutlined, HeartOutlined, EllipsisOutlined} from '@ant-design/icons';
import { InformationModal } from '../InformationModal/InformationModal';

import * as BooksActions from '../../store/actions/actions';

let savedBooks = [];

export function BooksList(){
  const { Meta } = Card;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const books = useSelector(state => state.books && state.books.data);
  const dispatch = useDispatch();

  const info = () => {
    message.info('Livro salvo com sucesso!');
  };

  function openInformationModal(book){
    setIsModalVisible(true);
    dispatch(BooksActions.currentBook(book));
  }

  function showTotalItems() {
    return `${books.totalItems} items`;
  }

  function handlePagination(page){
    dispatch(BooksActions.currentPage(page));
  }

  function handleSaveButton(book){
    savedBooks.push(book);
    savedBooks = savedBooks.filter(function(el, i) {
      return savedBooks.indexOf(el) === i;
    });

    window.localStorage.setItem('savedBook', JSON.stringify(savedBooks));

    info();
  }

  function renderDescriptionBook(book){
    return(
      <>
        <p> <strong> Título: </strong> <span>{book.volumeInfo.title}</span> </p>
        <p> <strong> Descrição: </strong> <span>{book.volumeInfo.description}</span></p>
      </>
    )
  }

  useEffect(() => {
    savedBooks = window.localStorage.getItem('savedBook') ? JSON.parse(window.localStorage.getItem('savedBook')) : [];
  }, [])

  return(
    <div className="books-list">
      <div className="content-books-list">
        { books && books.items ? books.items.map((book, index) => {
          return(
            <Card
              className="card-book"
              key={index}
              hoverable
              style={{ width: 300 }}
              cover={
                book.volumeInfo.imageLinks ? <img alt="example" src={book.volumeInfo.imageLinks.thumbnail} /> : <FileImageOutlined id="not-image"/>
              }
              actions={[
                <HeartOutlined 
                  key="favorite" 
                  onClick={() => { handleSaveButton(book) }}
                />,
                <EllipsisOutlined key="ellipsis" onClick={() => { openInformationModal(book)}}/>,
              ]}
            >
              <Meta
                title={book.volumeInfo.title}
                description={ renderDescriptionBook(book)}
              />
            </Card>
          )          
        }) : (
          <div>Nenhum livro foi encontrado, refaça sua busca!</div>
        )}
      </div>
      { isModalVisible && <InformationModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>}
      { books.totalItems > 0 && <Pagination showSizeChanger={false} defaultCurrent={1} total={books.totalItems} showTotal={showTotalItems} onChange={handlePagination}/> }
    </div>
  )
}