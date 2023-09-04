import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { MasterService } from '../../master.service';
import {
  createBlog,
  createBlogError,
  createBlogSuccess,
  loadBlogError,
  loadBlogs,
  loadBlogSuccess,
} from './blog.actions';
import { BlogActionAddModel, emptyBlog } from './blog.model';

@Injectable()
export class BlogEffects {
  readonly actions$: Actions = inject(Actions);
  readonly masterService: MasterService = inject(MasterService);

  // Effects loading blogs
  _blogs = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBlogs),
      exhaustMap(() => {
        return this.masterService.loadBlogs().pipe(
          map(data => {
            return loadBlogSuccess({ blogList: data, message: '' });
          }),
          catchError(error =>
            of(loadBlogError({ blogList: [], message: error.message })),
          ),
        );
      }),
    );
  });

  // Effects create blogs
  _create = createEffect(() => {
    return this.actions$.pipe(
      ofType(createBlog),
      exhaustMap((action: BlogActionAddModel) => {
        return this.masterService.createBlog(action.blogInput).pipe(
          map(data => {
            return createBlogSuccess({ blogInput: data, message: '' });
          }),
          catchError(error =>
            of(
              createBlogError({
                blogInput: emptyBlog,
                message: error.message,
              }),
            ),
          ),
        );
      }),
    );
  });
}
