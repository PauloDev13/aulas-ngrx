import { Action, createReducer, on } from '@ngrx/store';

import { AppStateModel } from './app-state.model';
import { loadSpinner } from './app.actions';
import { GlobalState } from './global.state';

const _appReducer = createReducer(
  GlobalState,
  on(loadSpinner, (state: AppStateModel, action: { isLoaded: boolean }) => {
    return {
      ...state,
      isLoaded: action.isLoaded,
    };
  }),
);

export function appReducer(state: AppStateModel | undefined, action: Action) {
  return _appReducer(state, action);
}
