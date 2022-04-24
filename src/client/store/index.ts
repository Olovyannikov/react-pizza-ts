import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { DispatchProp, RootStateOrAny } from 'react-redux';
import thunk from 'redux-thunk';
import { models } from '@/store/models';

export const store = createStore(combineReducers(models as any), composeWithDevTools(applyMiddleware(thunk)));

export type RootState = RootStateOrAny;
export type Dispatch = DispatchProp;
