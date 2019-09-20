// PACKAGES
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promiseMiddleware from 'redux-promise-middleware';

// REDUCERS

// ROOT REDUCER
const rootReducer = combineReducers({

});

// PERSIST REDUX
const persistConfig = {
  key: 'root',
  storage
}
const persistReducer = persistReducer(persistConfig, rootReducer);

// REDUX EXPORT
export const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware));
export const persistor = persistStore(store);