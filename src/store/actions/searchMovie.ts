import { AppDispatch } from "../store";
import { SET_SEARCH_QUERY, SearchQueryActionType } from "../types/searchMovie";

export const setSearchQuery = (query: string) => (dispatch: AppDispatch) => {
  dispatch(setSearchQueryAction(query));
};

export const setSearchQueryAction = (query: string): SearchQueryActionType => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
