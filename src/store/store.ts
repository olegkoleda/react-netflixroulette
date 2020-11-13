import { createStore, applyMiddleware, AnyAction, Dispatch } from "redux";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer, { IAppState } from "./reducers/rootReducer";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const appReducer = (state: IAppState , action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return reducer(state, action);
  }
};

const initStore = () => {
  return createStore(appReducer, middleware);
};

export const wrapper = createWrapper(initStore);

export type AppDispatch = Dispatch<AnyAction>;
