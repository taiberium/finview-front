import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware'
import {asyncReducer} from 'redux-promise-middleware-actions';
import searchAction from "./action/search";


const reducer = asyncReducer(searchAction);
/*const rootReducer = combineReducers({
    search: asyncReducer(searchAction),
    //  quotes: asyncReducer(getQuoteAction)
});*/

let middleware = [
    logger,
    promiseMiddleware,
];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

export default store;