import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import AppContext from '../context/AppContext';
import { apiSearch } from '../services/API_SEARCH';

function Drinks() {
  const { setApi, setOriginalApi } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      const host = process.env.REACT_APP_HOST;
      const response = await apiSearch(`${host}/drinks/name?q=`);
      const magicNumber = 12;
      setApi(response.drinks.slice(0, magicNumber));
      setOriginalApi(response.drinks.slice(0, magicNumber));
    }
    fetchData();
  }, [setApi, setOriginalApi]);

  return (
    <div>
      <Header />
      <Recipes />
      <Footer />
    </div>
  );
}

export default Drinks;
