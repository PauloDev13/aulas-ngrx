import { createAction, props } from '@ngrx/store';

import { BlogActionAddModel } from './blog.model';

export const loadBlogs = createAction('loadBlogs');

export const addBlog = createAction('addBlog', props<BlogActionAddModel>());
export const updateBlog = createAction(
  'updateBlog',
  props<BlogActionAddModel>(),
);
