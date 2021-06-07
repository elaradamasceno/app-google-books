import reducer from '../../../store/reducers/books';

describe('Books reducer', () => {
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

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle SHOW_BOOK_LIST', () => {
    const stateBefore = [];
    const action = {
      type: 'SHOW_BOOK_LIST',
      books
    };
    const stateAfter = {data: books};
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  })
})