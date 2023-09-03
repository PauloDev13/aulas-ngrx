import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { MasterService } from '../../master.service';
import { LOAD_BLOGS, loadBlogError, loadBlogSuccess } from './blog.actions';

@Injectable()
export class BlogEffects {
  // Effects
  _blogs = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_BLOGS),
      exhaustMap(() => {
        return this.masterService.loadBlogs().pipe(
          map(data => {
            return loadBlogSuccess({ blogList: data });
          }),
          catchError(error => of(loadBlogError({ message: error.message }))),
        );
      }),
    );
  });

  // readonly actions$: Actions = inject(Actions);
  // readonly masterService: MasterService = inject(MasterService);

  constructor(
    private actions$: Actions,
    private masterService: MasterService,
  ) {}
}
