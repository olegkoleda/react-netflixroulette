import { filterMovie } from './filterMovie'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SET_MOVIE_FILTER } from "../types/filterMovies";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Filter Movie', () => {
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it('set filter movie', async () => {

    const expectedActions = [
      { type: SET_MOVIE_FILTER, payload: 'test_filter' }
    ];

    await store.dispatch(filterMovie('test_filter'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});