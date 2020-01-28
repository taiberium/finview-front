import {get} from "../api/apiClient";
import API from "../api/api";
import {ACTIONS} from "./actions";
import {createAsyncAction} from 'redux-promise-middleware-actions';

const searchAction = createAsyncAction(ACTIONS.SEARCH, (ticker) => get(API.SEARCH(ticker)));

export default searchAction;