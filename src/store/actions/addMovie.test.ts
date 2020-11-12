// @ts-nocheck
import { addMovie } from './addMovie'
import mockAxios from '../../__mocks__/axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ADD_MOVIE_ERROR, ADD_MOVIE_STARTED, ADD_MOVIE_SUCCESS } from "../types/addMovie";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Add Movie action', () => {
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });

  it('success', async () => {
    const data = { data: 'mockedData' };

    mockAxios.post.mockResolvedValue(data)

    const expectedActions = [
      { type: ADD_MOVIE_STARTED },
      { type: ADD_MOVIE_SUCCESS, payload: 'mockedData' }
    ];

    await store.dispatch(addMovie({}));
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
  });

  it('error', async () => {
    mockAxios.post.mockRejectedValue(new Error())

    const expectedActions = [
      { type: ADD_MOVIE_STARTED },
      { type: ADD_MOVIE_ERROR, error: new Error() }
    ];

    await store.dispatch(addMovie({}));
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
  });
});