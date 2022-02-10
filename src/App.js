import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { fetchTable } from './redux/stocks';
import HomeItems from './components/HomeItems';
import DetailItems from './components/DetailItems';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTable());
  }, []);

  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/header" element={<Header />} />
      <Route path="/" element={<HomeItems />} />
      <Route path="/details/:ticker" element={<DetailItems />} />
    </Routes>
  );
};

export default App;
