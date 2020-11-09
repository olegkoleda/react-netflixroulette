import { updateMovie } from './updateMovie'
import mockAxios from '../../__mocks__/axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { UPDATE_MOVIE_ERROR, UPDATE_MOVIE_STARTED, UPDATE_MOVIE_SUCCESS } from "../types/updateMovie";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Update movie action', () => {
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });

  it('success', async () => {
    const data = { data: 'mockedData' };

    mockAxios.put.mockResolvedValue(data)

    const expectedActions = [
      { type: UPDATE_MOVIE_STARTED },
      { type: UPDATE_MOVIE_SUCCESS, payload: 'mockedData' }
    ];

    await store.dispatch(updateMovie({}));
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.put).toHaveBeenCalledTimes(1)
  });

  it('error', async () => {
    mockAxios.put.mockRejectedValue(new Error())

    const expectedActions = [
      { type: UPDATE_MOVIE_STARTED },
      { type: UPDATE_MOVIE_ERROR, error: new Error() }
    ];

    await store.dispatch(updateMovie({}));
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.put).toHaveBeenCalledTimes(1)
  });
});