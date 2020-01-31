import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware'
import {asyncReducer} from 'redux-promise-middleware-actions';
import {searchAction} from "./action/search";
import {getQuoteAction} from "./action/quote";


//const reducer = asyncReducer(searchAction);
const rootReducer = combineReducers({
    search: asyncReducer(searchAction),
    quotes: asyncReducer(getQuoteAction),
});

let middleware = [
    promiseMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;