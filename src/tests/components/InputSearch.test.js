import { InputSearch } from '../../components/InputSearch/InputSearch';
import { render, screen, userEvent, fireEvent} from '../global';

import { Provider } from 'react-redux';
import store  from '../../store/index';
import api from '../../services/api';

// jest.mock('../../services/api');
describe('InputSearch component', () => {
  it('should api request in change input search', () => {
    const handleChange = jest.fn();
    
    render(<Provider store={store}> <InputSearch/> </Provider>);

    // const teste = screen.getByTestId('input-search-component');

    // fireEvent.change(teste, {target: {value: 'JavaScript'}})
  })
});