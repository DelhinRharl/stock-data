import React from 'react';

const Details = (item) => {
  const {
    symbol, fillingDate, date, period, netReceivables, cashAndCashEquivalents,
  } = item;
  return (
    <div>
      <div className="[#0e128a] bg-gradient-to-b from-[#0e128a] to-[#01034d] grid h-min-48 p-2">
        <div>
          <span className="text-[#cc2263] font-bold font-cer">{symbol}</span>
        </div>
        <span className="text-gray-400">
          Period:
          {period}
        </span>
        <span className="text-blue-300">
          {' '}
          Filling Date:
          {fillingDate}
        </span>
        <span className="text-white">
          {' '}
          Date:
          {date}
        </span>
        <span className="text-green-400 ">
          {' '}
          Receivables:
          <span className="text-[#cc2263]">{netReceivables}</span>
        </span>
        <span className="text-green-400 ">
          {' '}
          cashAndCashEquivalents:
          <span className="text-[#cc2263]">{cashAndCashEquivalents}</span>
        </span>
      </div>
    </div>
  );
};

export default Details;
