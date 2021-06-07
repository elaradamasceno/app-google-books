import reducer from '../../../store/reducers/currentBook';

describe('CurrentBook reducer', () => {
  const initialState = {
    data: []
  }

  const book = { 
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
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CURRENT_BOOK', () => {
    const stateBefore = [];
    const action = {
      type: 'CURRENT_BOOK',
      book
    };
    const stateAfter = {data: book};
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  })
})