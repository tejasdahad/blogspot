import React, { useEffect } from 'react';
import './App.css';
import './styles/styles.scss';
import 'materialize-css/dist/css/materialize.min.css';
import BlogState from './context/blog/BlogState';
import FilterState from './context/filter/FilterState';
import './firebase/firebase';
import AppRouter from './routers/AppRouter';

const App = () => {

  return (
      <BlogState>
      <FilterState>
        <div className="App">
          <AppRouter />
        </div>
        </FilterState>
      </BlogState>

  );
}

export default App;
