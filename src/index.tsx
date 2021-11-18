import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Pages from './pages';
import { Context, useStore} from './store';
import Header from './components/header';

const Index = () => {
  const store = useStore();
  return (
    <React.StrictMode>
      <Context.Provider value={store}>
        <Header />
        <Pages />
      </Context.Provider>
    </React.StrictMode>
  )
}


ReactDOM.render(<Index />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
