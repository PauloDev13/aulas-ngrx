import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateModel } from './app-state.model';

const selectorAppState = createFeatureSelector<AppStateModel>('app');

export const selectorSpinnerState = createSelector(
  selectorAppState,
  (state: AppStateModel) => {
    return state.isLoaded;
  },
);
