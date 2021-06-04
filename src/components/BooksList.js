import React from 'react';
import { useSelector } from 'react-redux';

import { Card, Pagination } from 'antd';
import { FileImageOutlined, HeartOutlined, EllipsisOutlined} from '@ant-design/icons';

export function BooksList(){
  const { Meta } = Card;
  const books = useSelector(state => state && state.data);

  return(
    <div className="books-list">
      <div className="content-books-list">
        {books && books.map((book, index) => {
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
                <EllipsisOutlined key="ellipsis" />,
              ]}
              >
              <Meta
                title={book.volumeInfo.title}
                description={(
                  <div>
                    <p> <strong> Título: </strong> <span>{book.volumeInfo.title}</span> </p>
                    <p> <strong> Autor: </strong> {book.volumeInfo.authors && book.volumeInfo.authors.map(author => <span key={author}>{author},</span>)}</p>
                    <p> <strong> Categoria: </strong> {book.volumeInfo.categories && book.volumeInfo.categories.map(category => <span key={category}>{category},</span>)} </p>
                    <p> <strong> Descrição: </strong> <span>{book.volumeInfo.description}</span></p>
                  </div>
                )}
              />
            </Card>
          )
        })}
      </div>
      <Pagination defaultCurrent={1} total={500}></Pagination>
    </div>
  )
}