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
  removeBlog,
  removeBlogSuccess,
  updateBlog,
  updateBlogError,
  updateBlogSuccess,
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

  // Effects update blogs
  _update = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateBlog),
      exhaustMap((action: BlogActionAddModel) => {
        return this.masterService.updateBlog(action.blogInput).pipe(
          map(() => {
            return updateBlogSuccess({
              blogInput: action.blogInput,
              message: '',
            });
          }),
          catchError(error =>
            of(
              updateBlogError({
                blogInput: emptyBlog,
                message: error.message,
              }),
            ),
          ),
        );
      }),
    );
  });

  // Effects remove blogs
  _remove = createEffect(() => {
    return this.actions$.pipe(
      ofType(removeBlog),
      exhaustMap((action: { id: number }) => {
        return this.masterService.removeBlog(action.id).pipe(
          map(() => {
            return removeBlogSuccess({
              id: action.id,
            });
          }),
          catchError(error =>
            of(
              updateBlogError({
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
