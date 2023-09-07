import { createAction, props } from '@ngrx/store';

export const SHOW_ALERT = '[app event] show alert';
export const EMPTY_ACTION = '[app event] empty action';

export const LOAD_SPINNER = '[blog page] load spinner';

export const showAlert = createAction(
  SHOW_ALERT,
  props<{ message: string; actionResult: string }>(),
);

export const emptyAction = createAction(EMPTY_ACTION);

export const loadSpinner = createAction(
  LOAD_SPINNER,
  props<{ isLoaded: boolean }>(),
);
