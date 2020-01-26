import {createAsyncAction} from "redux-promise-middleware-actions";
import {get} from "../api/apiClient";
import API from "../api/api";
import {ACTIONS} from "./actions";

export const searchAction = createAsyncAction(ACTIONS.SEARCH, (ticker) => get(API.SEARCH(ticker)));


