export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

interface ISetSearchQuery{
  type: typeof SET_SEARCH_QUERY;
  payload: string;
}

export type SearchQueryActionType = ISetSearchQuery;
