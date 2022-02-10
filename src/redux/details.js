import * as Actions from './DetActions';

export const fetchDetailsTable = (payload) => async (dispatch) => {
  const results = await fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${payload}?limit=120&apikey=109546e5f8cecfbfeb79a9f2af7ee3c8`);
  const data = await results.json();
  dispatch(Actions.fetchDetails(data));
};

const initialStateDetails = {
  details: [],

};

// reducer
export const reducer = (state = initialStateDetails, { type, payload }) => {
  switch (type) {
    case Actions.ADD_DETAILS_DATA:
      return { details: [...payload] };
    default:
      return state;
  }
};

export default reducer;
