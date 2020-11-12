// @ts-nocheck
import { sortMovies } from './sortMovies'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SET_MOVIE_SORT } from "../types/sortMovies";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Sort movies', () => {
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it('set sort param', async () => {

    const expectedActions = [
      { type: SET_MOVIE_SORT, payload: 'test_param' }
    ];

    await store.dispatch(sortMovies('test_param'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});