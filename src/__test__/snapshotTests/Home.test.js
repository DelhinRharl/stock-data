import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '../../components/Home';
import store from '../../redux/configureStore';

describe('Home  component', () => {
  it(' should render the  component successfully', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(home).toMatchSnapshot();
  });
});
