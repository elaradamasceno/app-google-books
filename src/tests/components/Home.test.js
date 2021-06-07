import { Home } from '../../components/Home/Home';
import {render, screen} from '../global';
import { Provider } from 'react-redux';
import store  from '../../store/index';

describe('Home component', () => {
  it('should display header items', () => {
    render( <Provider store={store}> <Home /> </Provider>)

    const iconGoogle = screen.getByRole('icon-google');
    const imageGoogle = screen.getByRole('img-google');
    const textBooks = screen.getByText('Books');

    expect(iconGoogle).toBeInTheDocument();
    expect(imageGoogle).toBeInTheDocument();
    expect(textBooks).toBeInTheDocument();
  });

  it('should display the input search component', () => {
    render( <Provider store={store}> <Home /> </Provider>);
    const inputSearch = screen.getByTestId('input-search-component')

    expect(inputSearch).toBeInTheDocument();
  });

  it('should not display the books list component before interacting with the input', () => {
    render( <Provider store={store}> <Home /> </Provider>);

    const booksList = screen.queryByTestId('books-list');
    expect(booksList).not.toBeInTheDocument();
  });
});