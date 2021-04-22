import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter, Switch } from "react-router-dom";

import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import rootReducer from './Redux/Reducers/RootReducers.jsx';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Switch>
          <App />
        </Switch>
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
