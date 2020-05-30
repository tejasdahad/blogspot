import React from 'react';
import { createBrowserHistory } from "history";
import NotFoundPage from '../components/NotFoundPage';
import EditBlog from '../components/EditBlog';
import AddBlog from '../components/AddBlog';
import BlogItem from '../components/BlogItem';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import { Router, Switch, Route } from 'react-router-dom';

export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <div className="container">
            <Router history={history}>
              <Header />
              <Switch>
                <Route exact path='/' component={DashboardPage} />
                <Route path='/create' component={AddBlog} />
                <Route path='/blog/:id' component={BlogItem} />
                <Route path='/edit/:id' component={EditBlog} />
                <Route component={NotFoundPage} />
              </Switch>
            </Router>
          </div>
    );
}

export default AppRouter;