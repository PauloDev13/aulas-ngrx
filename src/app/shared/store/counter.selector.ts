import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IState } from './counter.model';

const getCounterState = createFeatureSelector<IState>('counter');

export const selectorCounter = createSelector(
  getCounterState,
  (state: IState) => {
    return state.counter;
  },
);

export const selectorChannelName = createSelector(
  getCounterState,
  (state: IState) => {
    return state.channelName;
  },
);
