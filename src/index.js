import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EntriesPage from './pages/EntriesPage'
import EntryPage from './pages/EntryPage'
import NotFoundPage from './pages/NotFoundPage'
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/entries" component={EntriesPage} />
            <Route path="/entry" component={EntryPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
