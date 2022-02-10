import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import DetailItems from '../../components/DetailItems';
import store from '../../redux/configureStore';

describe('stock data  tests', () => {
  test('should render the data', () => {
    const data = {
      symbol: 'VALE',
      Period: 'FY',
      FillingDate: '2020-12-31',
      Date: '2020-12-31',
      Receivables: '5697000000',

    };
    const stock = render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailItems data={data} />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(stock).toMatchSnapshot();
  });
});
