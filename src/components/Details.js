import React from 'react';

const Details = (item) => {
  const {
    symbol, fillingDate, date, period, netReceivables, cashAndCashEquivalents,
  } = item;
  return (
    <div>
      <div className="bg-gradient-to-r from-[#3dc2ff] to-[#0058bd] grid h-min-48 p-2 border-b-2 border-cyan-500">
        <div>
          <span className="text-black font-extrabold text-xl ">{symbol}</span>
        </div>
        <span className="text-blue-900">
          Period:
          <span className="font-semibold">{period}</span>
        </span>
        <span className="text-blue-900">
          {' '}
          Filling Date:
          <span className="font-semibold text-black">{fillingDate}</span>
        </span>
        <span className="text-black">
          {' '}
          Date:
          <span className="font-semibold">
            {' '}
            {date}
          </span>
        </span>
        <span className="text-black">
          {' '}
          Receivables:
          <span className="text-green-900 font-bold">{netReceivables}</span>
        </span>
        <span className="text-black">
          {' '}
          cashAndCashEquivalents:
          <span className="text-green-900 font-bold">{cashAndCashEquivalents}</span>
        </span>
      </div>
    </div>
  );
};

export default Details;
