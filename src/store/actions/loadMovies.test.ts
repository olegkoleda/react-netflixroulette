// @ts-nocheck
import { loadMovies, loadMovieById } from "./loadMovies";
import mockAxios from "../../__mocks__/axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  LOAD_MOVIES_STARTED,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIE_ERROR,
  LOAD_MOVIE_STARTED,
  LOAD_MOVIE_SUCCESS,
} from "../types/loadMovies";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("Load movies action", () => {
  const store = mockStore({
    params: {
      filter: "",
      sortBy: "release_date",
      search: '',
    }
  });

  afterEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });

  it("success", async () => {
    const data = { data: "mockedData" };

    mockAxios.get.mockResolvedValue({ data });

    const expectedActions = [
      { type: LOAD_MOVIES_STARTED },
      { type: LOAD_MOVIES_SUCCESS, payload: "mockedData" },
    ];

    await store.dispatch(loadMovies());
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("error", async () => {
    mockAxios.get.mockRejectedValue(new Error());

    const expectedActions = [
      { type: LOAD_MOVIES_STARTED },
      { type: LOAD_MOVIES_ERROR, error: new Error() },
    ];

    await store.dispatch(loadMovies({}));
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});

describe("Load movie by ID action", () => {
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });

  it("success", async () => {
    const data = { data: "mockedData" };

    mockAxios.get.mockResolvedValue(data);

    const expectedActions = [
      { type: LOAD_MOVIE_STARTED },
      { type: LOAD_MOVIE_SUCCESS, payload: "mockedData" },
    ];

    await store.dispatch(loadMovieById(123));
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("error", async () => {
    mockAxios.get.mockRejectedValue(new Error());

    const expectedActions = [
      { type: LOAD_MOVIE_STARTED },
      { type: LOAD_MOVIE_ERROR, error: new Error() },
    ];

    await store.dispatch(loadMovieById(123));
    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
