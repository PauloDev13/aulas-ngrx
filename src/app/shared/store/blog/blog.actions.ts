import { createAction, props } from '@ngrx/store';

import { BlogActionAddModel } from './blog.model';

export const loadBlogs = createAction('loadBlogs');

export const addBlog = createAction('addBlog', props<BlogActionAddModel>());

export const updateBlog = createAction(
  'updateBlog',
  props<BlogActionAddModel>(),
);

export const removeBlog = createAction('updateBlog', props<{ id: number }>());
