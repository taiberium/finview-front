import {get} from "../api/apiClient";
import API from "../api/api";
import {ACTIONS} from "./actions";
import {createAsyncAction} from 'redux-promise-middleware-actions';
import isEmpty from 'lodash/isEmpty';

export const searchAction = createAsyncAction(ACTIONS.SEARCH, (ticker) => {
    if (isEmpty(ticker)) return new Promise((resolve) => resolve([]));
    return get(API.SEARCH(ticker));
});