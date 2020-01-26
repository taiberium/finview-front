import {createAsyncAction} from "redux-promise-middleware-actions";
import {get} from "../api/apiClient";
import API from "../api/api";
import {ACTIONS} from "./actions";

export const getQuoteAction = createAsyncAction(ACTIONS.GET_QUOTE, () => get(API.GET_QUOTE));


