import React, { useContext } from 'react';
import Category from '../../components/category';
import { Context } from '../../store';
import { IContext } from '../../store/context';
import './style.css';

function Home() {

  const {store} = useContext<IContext>(Context);

  return (
    <div className="home">
      {
        store.catalog.categories.map((category, i) => (<Category category={category} key={i} />))
      }
    </div>
  );
}

export default Home;
