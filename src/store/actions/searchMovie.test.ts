import { setSearchQuery } from './searchMovie'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SET_SEARCH_QUERY } from "../types/searchMovie";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Search movies', () => {
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it('set search query', async () => {

    const expectedActions = [
      { type: SET_SEARCH_QUERY, payload: 'test_query' }
    ];

    await store.dispatch(setSearchQuery('test_query'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});