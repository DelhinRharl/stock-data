import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailsTable } from '../redux/details';
import Details from './Details';
import Navbar from './Navbar';

const DetailItems = () => {
  const stockDetails = useSelector((state) => state.detailsReducer.details);
  const dispatch = useDispatch();

  const ticker = useParams();

  useEffect(() => {
    dispatch(fetchDetailsTable(ticker.ticker));
  }, [ticker]);

  return (
    <div>
      <Navbar />
      {stockDetails.map((item) => (
        <li key={item.ticker}>
          <Details
            id={item.ticker}
            date={item.date}
            period={item.period}
            symbol={item.symbol}
            fillingDate={item.fillingDate}
            netReceivables={item.netReceivables}
            cashAndCashEquivalents={item.cashAndCashEquivalents}
          />
        </li>
      ))}
    </div>
  );
};

export default DetailItems;
