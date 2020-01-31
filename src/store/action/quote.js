import {createAsyncAction} from "redux-promise-middleware-actions";
import {get} from "../api/apiClient";
import API from "../api/api";
import {ACTIONS} from "./actions";
import isEmpty from 'lodash/isEmpty';

export const getQuoteAction = createAsyncAction(ACTIONS.GET_QUOTE, (tickerArray) => {
    if (isEmpty(tickerArray)) return new Promise((resolve) => resolve([]));
    return get(API.GET_QUOTE, {quote: tickerArray});
});


