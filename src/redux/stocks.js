import * as Actions from './Actions';

const url = 'https://financialmodelingprep.com/api/v3/actives?limit=45&apikey=109546e5f8cecfbfeb79a9f2af7ee3c8';

export const fetchTable = () => async (dispatch) => {
  const results = await fetch(url);
  const data = await results.json();
  dispatch(Actions.fetchData(data));
};

const initialState = {
  stocks: [],
};

// reducer
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.ADD_MAIN_DATA:
      return { stocks: [...payload] };
    default:
      return state;
  }
};

export default reducer;
