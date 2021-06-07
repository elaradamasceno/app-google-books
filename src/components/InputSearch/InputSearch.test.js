import { InputSearch } from './InputSearch';
import { render, screen, fireEvent } from '../../tests/index';

import { Provider } from 'react-redux';
import store  from '../../store/index';
import api from '../../services/api';

jest.mock('../../services/api');
describe('InputSearch component', () => {
  it('should api request in change input search', () => {
    const handleChange = jest.fn();
    render(<Provider store={store}> <InputSearch/> </Provider>);

    // api.mockResolvedValue(
    //   { items: [{
    //     id: 1,
    //     volumeInfo: {
    //       title: 'JavaScript Remoto',
    //       description: 'Test mock',
    //       authors: ["Ben Vinegar", "Anton Kovalyov"],
    //       categories: ["Computers"],
    //       imageLinks: { thumbnail: "http://books.google.com/books/content?id=Zi9lDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
    //       pageCount: 384,
    //       publisher: "Novatec Editora"
    //     },
    //     id: 2,
    //     volumeInfo: {
    //       title: 'JavaScript ES6',
    //       description: 'Test mock',
    //       authors: ["Ben Vinegar", "Anton Kovalyov"],
    //       categories: ["Computers"],
    //       imageLinks: { thumbnail: "http://books.google.com/books/content?id=Zi9lDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
    //       pageCount: 400,
    //       publisher: "Novatec Editora"
    //     }
    //   }],
    //   totalItems: 300
    // })

    // const inputSearch = screen.getByTestId('input-search-component');
    // fireEvent.change(inputSearch, {target: { value: 'javascript'}})

    // console.log(inputSearch.innerHTML)
  })
});