// @ts-nocheck
import paramsReducer, {initialState} from './paramsReducer';
const mockAction = {
  type: "MOCK_ACTION_TYPE",
  payload: {},
}
describe('params reducer', () => {
  it('should return initial state', () => expect(paramsReducer(undefined, mockAction)).toEqual(initialState));

  it('should handle SET_MOVIE_FILTER', () => expect(
    paramsReducer(  
      {},
      {
        type: 'SET_MOVIE_FILTER',
        payload: 'selected_filter'
      }
    )
  ).toEqual({
    filter: "selected_filter",
  }));

  it('should handle SET_MOVIE_SORT', () => expect(
    paramsReducer(
      {},
      {
        type: 'SET_MOVIE_SORT',
        payload: 'release_date'
      }
    )
  ).toEqual({
    sortBy: "release_date",
  }));

  it('should handle SET_SEARCH_QUERY', () => expect(
    paramsReducer(
      {},
      {
        type: 'SET_SEARCH_QUERY',
        payload: 'query'
      }
    )
  ).toEqual({
    search: "query",
  }));

});