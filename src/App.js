import React, { useEffect } from 'react';
import './App.css';
import './styles/styles.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import BlogState from './context/blog/BlogState';
import FilterState from './context/filter/FilterState';
import AlertState from './context/alert/AlertState';
import './firebase/firebase';
import AppRouter from './routers/AppRouter';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
      <BlogState>
        <FilterState>
          <AlertState>
            <div className="App">
              <AppRouter />
            </div>
          </AlertState>
        </FilterState>
      </BlogState>
  );
}

export default App;
