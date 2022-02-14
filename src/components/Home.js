import { NavLink } from 'react-router-dom';

const Home = (item) => {
  const {
    ticker, price, changes, companyName,
  } = item;
  return (

    <div className="">
      <NavLink to={{ pathname: `/details/${ticker}` }}>
        <div className=" bg-gradient-to-r from-[#3dc2ff] to-[#0058bd] w-full h-40 border-blue-800 p-4 rounded-xl">
          <div className="text-[#000000] text-xl font-bold">
            {companyName}
          </div>
          <div className="text-black font-semibold">
            {ticker}
          </div>
          <div className="text-black text-lg font-semibold">
            Price:
            {' '}
            <span className="text-[#3afd5a]">{price}</span>
          </div>
          <div className="text-black font-semibold">
            Price Change:
            {' '}
            <span className="text-[#3afd5a]">{changes}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
