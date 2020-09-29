import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage'

const persistConfig = {
	key: 'login',
	storage: localForage
}

const loginstate = {
	"token": null,
}

function login(state = loginstate, action) {
	switch (action.type) {
		case 'LOGIN' :
			return { "token": action.token }
		case 'LOGOUT' :
			return { "token": null }
		default:
			return { "token": null }
	}
}

const persistedReducer = persistReducer(persistConfig, login)
const loginstore = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const loginpersistor = persistStore(loginstore)

export {
	loginstore,
	loginpersistor
}