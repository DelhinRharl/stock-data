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
      <div className="flex justify-center rounded-3xl">
        <input className="h-10 p-4 w-80 bg-[#3dc2ff] text-black placeholder:text-neutral-900 rounded-lg  " type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  list-none">
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
