import { render, screen, userEvent } from '../../tests/index';
import * as actions from './books';

const books = { 
  items: [
    {
      id: 1,
      volumeInfo: {
        title: 'JavaScript Remoto',
        description: 'Test mock',
        authors: ["Ben Vinegar", "Anton Kovalyov"],
        categories: ["Computers"],
        imageLinks: { thumbnail: "http://books.google.com/books/content?id=Zi9lDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
        pageCount: 384,
        publisher: "Novatec Editora"
      }
    },
    {
      id: 2,
      volumeInfo: {
        title: 'JavaScript ES6',
        description: 'Test mock',
        authors: ["Ben Vinegar", "Anton Kovalyov"],
        categories: ["Computers"],
        imageLinks: { thumbnail: "http://books.google.com/books/content?id=Zi9lDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
        pageCount: 400,
        publisher: "Novatec Editora"
      }
    }
  ],
  totalItems: 300
}

describe('BooksList component', () => {
  it('should create an action for showBookList', () => {
    const expectedAction = {
      type: 'SHOW_BOOK_LIST',
      books
    }

    expect(actions.showBookList(books)).toEqual(expectedAction);
  });

  it('should create an action for currentBook', () => {
    let book = books.items[0];
    const expectedAction = {
      type: 'CURRENT_BOOK',
      book
    }

    expect(actions.currentBook(book)).toEqual(expectedAction);
  });

  it('should create an action for currentPage', () => {
    let page = 1;

    const expectedAction = {
      type: 'CURRENT_PAGE',
      page
    }

    expect(actions.currentPage(page)).toEqual(expectedAction)
  })
})