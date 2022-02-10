import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import HomeItems from '../../components/HomeItems';
import store from '../../redux/configureStore';

describe('Main data  tests', () => {
  test('should render the data', () => {
    const details = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomeItems />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(details).toMatchSnapshot();
  });
});
