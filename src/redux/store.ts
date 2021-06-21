import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Config } from 'src/configs/config';
import * as rootReducer from './rootReducer';
import { RootState } from './rootState';

const persistConfig: PersistConfig<any> = {
  key: Config.APP_NAME,
  storage,
  whitelist: ['userReducer'],
};

const appReducer = combineReducers<RootState>(rootReducer);
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persister = persistStore(store);
