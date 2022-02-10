import { NavLink } from 'react-router-dom';

const Home = (item) => {
  const {
    ticker, price, changes, companyName,
  } = item;
  return (

    <div className="">
      <NavLink to={{ pathname: `/details/${ticker}` }}>
        <div className="bg-[#0e128a] bg-gradient-to-r from-[#0e128a] to-[#01034d] w-full h-40 border-b-2 border-blue-800 p-4">
          <div className="text-[#F64C71] text-xl">
            {companyName}
          </div>
          <div className="text-gray-400">
            {ticker}
          </div>
          <div className="text-white text-lg">
            Price:
            {' '}
            {price}
          </div>
          <div className="text-green-500">
            Price Change:
            {' '}
            <span className="text-[#F64C71]">{changes}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
