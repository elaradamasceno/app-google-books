import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { Card, Pagination } from 'antd';
import { FileImageOutlined, HeartOutlined, EllipsisOutlined} from '@ant-design/icons';
import { InformationModal } from './InformationModal';

import * as BooksActions from '../store/actions/books';

export function BooksList(){
  const { Meta } = Card;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const books = useSelector(state => state.books && state.books.data);
  const dispatch = useDispatch();

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

  return(
    <div className="books-list">
      <div className="content-books-list">
        {books && books.items.map((book, index) => {
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
                <HeartOutlined key="favorite" />,
                <EllipsisOutlined key="ellipsis" onClick={() => { openInformationModal(book)}}/>,
              ]}
            >
              <Meta
                title={book.volumeInfo.title}
                description={(
                  <>
                    <p> <strong> Título: </strong> <span>{book.volumeInfo.title}</span> </p>
                    <p> <strong> Descrição: </strong> <span>{book.volumeInfo.description}</span></p>
                  </>
                )}
              />
            </Card>
          )
        })}
      </div>
      { isModalVisible && <InformationModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>}
      { books && <Pagination showSizeChanger={false} defaultCurrent={1} total={books.totalItems} showTotal={showTotalItems} onChange={handlePagination}/> }
    </div>
  )
}