import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer())

const middlewares = [logger];

const configureStore = () => {
	const store = createStore(persistedReducer, compose(
		applyMiddleware(
			...middlewares
		)))
	const persistor = persistStore(store)
	return { store, persistor }
}

export const storeInst = configureStore();