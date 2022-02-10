import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Details from '../../components/Details';

describe('Main data  tests', () => {
  test('should render the data', () => {
    const data = {
      ticker: 'F',
      changes: 0.360001,
      price: '20.66',
      changesPercentage: '1.7734021',
      companyName: 'Ford Motor Company',
    };
    const details = render(
      <BrowserRouter>
        <Details data={data} />
      </BrowserRouter>,
    );

    expect(details).toMatchSnapshot();
  });
});
