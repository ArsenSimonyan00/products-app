import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createReducer } from "redux-orm";
import orm from "./orm";
import stateReducer from "./state/stateReducer";
import cartReducer from "./cart/reducer";
import HistoryReducer from "./History/reducer";

const rootReducer = combineReducers({
  orm: createReducer(orm),
  state: stateReducer,
  cart: cartReducer,
  history: HistoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
