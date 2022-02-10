import stocks from '../../redux/stocks';

const mockStore = {
  stocksReducer: [
    {
      ticker: 'F',
      changes: 0.360001,
      price: '20.66',
      changesPercentage: '1.7734021',
      companyName: 'Ford Motor Company',
    },
    {
      ticker: 'AAPL',
      changes: -0.169998,
      price: '174.61',
      changesPercentage: '-0.09726409',
      companyName: 'Apple Inc.',
    },
  ],
};

describe('Test', () => {
  test('Initial State', () => {
    expect(stocks([], {})).toEqual([]);
  });
});

describe('Mock stocks Reducer', () => {
  test('Test stocks Reducer With Mock Data', () => {
    const FETCH_DATA = 'FETCH_DATA';
    const store = mockStore;
    const action = {
      type: FETCH_DATA,
      payload: {
        stocksReducer: [
          {
            ticker: 'F',
            changes: 0.360001,
            price: '20.66',
            changesPercentage: '1.7734021',
            companyName: 'Ford Motor Company',
          },
          {
            ticker: 'AAPL',
            changes: -0.169998,
            price: '174.61',
            changesPercentage: '-0.09726409',
            companyName: 'Apple Inc.',
          },
        ],
      },
    };
    expect(stocks(store, action)).toEqual(action.payload);
  });
});
