import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localforage from 'localforage'

const persistConfig = {
	key: 'root',
	storage: localforage,
}

const loginState = { "login_status": false }

const loginReducer = (state = loginState, action) => {
	switch(action.type) {
		
		case 'login':
			return { "login_status": true }

		case 'logout':
			return { "login_status": false }

		default:
			return { "login_status": false }
	}
}

const persistedReducer = persistReducer(persistConfig, loginReducer)

export const LoginStore = createStore(
	persistedReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const LoginPersistor = persistStore(LoginStore)
