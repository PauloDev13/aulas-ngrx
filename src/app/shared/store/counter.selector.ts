import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterModel } from './counter.model';

const getCounterState = createFeatureSelector<CounterModel>('counter');

export const selectorCounter = createSelector(
  getCounterState,
  (state: CounterModel) => {
    return state.counter;
  },
);

export const selectorChannelName = createSelector(
  getCounterState,
  (state: CounterModel) => {
    return state.channelName;
  },
);
