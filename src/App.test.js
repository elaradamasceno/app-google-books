import {render, screen} from './tests/index';
import App from './App';

describe('App component', () => {
  it('render home component', () => {
    render(<App />);
    const homeComponent = screen.getByTestId('home-component');
    expect(homeComponent).toBeInTheDocument();
  });
})
