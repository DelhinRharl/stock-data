import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import Header from './Header';

const HomeItems = () => {
  const [search, setSearch] = useState('');
  const company = useSelector((state) => state.stocksReducer.stocks);
  const companies = company.filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(search.toLocaleLowerCase())));
  return (
    <div>
      <Header />
      <input className="h-10 p-4 w-full bg-[#12115f] text-white  " type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid grid-cols-2  list-none">
        {companies.map((comName) => (
          <li key={comName.ticker}>
            <Home
              id={comName.ticker}
              ticker={comName.ticker}
              changes={comName.changes}
              price={comName.price}
              companyName={comName.companyName}
            />
          </li>
        ))}
      </div>
    </div>
  );
};
export default HomeItems;
