import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';

import { emptyAction, showAlert } from './app.actions';

@Injectable()
export class AppEffects {
  readonly actions$: Actions = inject(Actions);
  readonly snackBar: MatSnackBar = inject(MatSnackBar);

  _showSnackbar = createEffect(() =>
    this.actions$.pipe(
      ofType(showAlert),
      exhaustMap((action: { message: string; actionResult: string }) =>
        this.showSnackbarAlert(action.message, action.actionResult)
          .afterDismissed()
          .pipe(map(() => emptyAction())),
      ),
    ),
  );

  private showSnackbarAlert(message: string, actionResult: string) {
    const _classSnackbar =
      actionResult === 'pass' ? 'green-snackbar' : 'red-snackbar';
    return this.snackBar.open(message, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: [_classSnackbar],
    });
  }
}
