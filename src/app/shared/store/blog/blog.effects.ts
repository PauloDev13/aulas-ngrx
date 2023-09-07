import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';

import { MasterService } from '../../master.service';
import { loadSpinner, showAlert } from '../global/app.actions';
import {
  CREATE_BLOG,
  createBlogSuccess,
  LOAD_BLOG,
  loadBlogError,
  loadBlogSuccess,
  REMOVE_BLOG,
  removeBlogSuccess,
  UPDATE_BLOG,
  updateBlogSuccess,
} from './blog.actions';
import { BlogModel } from './blog.model';

@Injectable()
export class BlogEffects {
  readonly actions$: Actions = inject(Actions);
  readonly masterService: MasterService = inject(MasterService);

  // Effects loading blogs
  _loadBlogs = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_BLOG),
      exhaustMap(() => {
        return this.masterService.loadBlogs().pipe(
          map((data: BlogModel[]) => {
            return loadBlogSuccess({ blogList: data });
          }),
          catchError(error =>
            of(
              loadBlogError({ message: error.message }),
              loadSpinner({ isLoaded: false }),
            ),
          ),
        );
      }),
    );
  });

  // Effects create blogs
  _createBlog = createEffect(() =>
    this.actions$.pipe(
      ofType(CREATE_BLOG),
      switchMap((action: { blogInput: BlogModel }) =>
        this.masterService.createBlog(action.blogInput).pipe(
          switchMap((data: BlogModel) =>
            of(
              createBlogSuccess({ blogInput: data }),
              loadSpinner({ isLoaded: false }),
              showAlert({
                message: 'Blog created successfully',
                actionResult: 'pass',
              }),
            ),
          ),
          catchError(error =>
            of(
              showAlert({
                message: `Create blog failed ${error.message}`,
                actionResult: 'fail',
              }),
              loadSpinner({ isLoaded: false }),
            ),
          ),
        ),
      ),
    ),
  );

  // Effects update blogs
  _updateBlog = createEffect(() => {
    return this.actions$.pipe(
      ofType(UPDATE_BLOG),
      switchMap((action: { blogInput: BlogModel }) => {
        return this.masterService.updateBlog(action.blogInput).pipe(
          switchMap(() => {
            return of(
              updateBlogSuccess({
                blogInput: action.blogInput,
              }),
              loadSpinner({ isLoaded: false }),
              showAlert({
                message: 'Blog updated successfully',
                actionResult: 'pass',
              }),
            );
          }),
          catchError(error =>
            of(
              showAlert({
                message: `Update blog failed ${error.message}`,
                actionResult: 'fail',
              }),
              loadSpinner({ isLoaded: false }),
            ),
          ),
        );
      }),
    );
  });

  // Effects remove blogs
  _removeBlog = createEffect(() => {
    return this.actions$.pipe(
      ofType(REMOVE_BLOG),
      switchMap((action: { id: number }) => {
        return this.masterService.removeBlog(action.id).pipe(
          switchMap(() => {
            return of(
              removeBlogSuccess({
                id: action.id,
              }),
              loadSpinner({ isLoaded: false }),
              showAlert({
                message: 'Blog removed successfully',
                actionResult: 'pass',
              }),
            );
          }),
          catchError(error =>
            of(
              showAlert({
                message: `Remove blog failed ${error.message}`,
                actionResult: 'fail',
              }),
              loadSpinner({ isLoaded: false }),
            ),
          ),
        );
      }),
    );
  });
}
