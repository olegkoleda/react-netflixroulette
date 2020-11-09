import { deleteMovie } from './deleteMovie'
import mockAxios from '../../__mocks__/axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { DELETE_MOVIE_ERROR, DELETE_MOVIE_STARTED, DELETE_MOVIE_SUCCESS } from "../types/deleteMovie";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Delete Movie action', () => {
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });

  it('success', async () => {
    const data = { data: 'mockID' };

    mockAxios.delete.mockResolvedValue(data)

    const expectedActions = [
      { type: DELETE_MOVIE_STARTED },
      { type: DELETE_MOVIE_SUCCESS, payload: 'mockID' }
    ];

    await store.dispatch(deleteMovie('mockID'));
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.delete).toHaveBeenCalledTimes(1)
  });

  it('error', async () => {
    mockAxios.delete.mockRejectedValue(new Error())

    const expectedActions = [
      { type: DELETE_MOVIE_STARTED },
      { type: DELETE_MOVIE_ERROR, error: new Error() }
    ];

    await store.dispatch(deleteMovie('mockID'));
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.delete).toHaveBeenCalledTimes(1)
  });
});