// store/store.ts

import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './reducers'; // Pastikan Anda mengganti ini dengan lokasi yang benar

const middleware: Middleware[] = [];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
