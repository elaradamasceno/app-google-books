import { InputSearch } from './InputSearch';
import { render, screen, userEvent } from '../../tests/index';

import { Provider } from 'react-redux';
import store  from '../../store/index';
import api from '../../services/api';

jest.mock('../../services/api');
describe('InputSearch component', () => {
  it('should api request in change input search', () => {
    const handleChange = jest.fn();
    render(<Provider store={store}> <InputSearch/> </Provider>);
  })
});