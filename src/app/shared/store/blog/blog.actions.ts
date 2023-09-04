import { createAction, props } from '@ngrx/store';

import { BlogActionAddModel, BlogsListModel } from './blog.model';

// Declaration constants for actions
export const LOAD_BLOGS = '[blog page] load blogs';
export const LOAD_BLOG_SUCCESS = '[blog page] load blog success';
export const LOAD_BLOG_ERROR = '[blog page] load blog error';

// Actions loading blogs
export const loadBlogs = createAction(LOAD_BLOGS);
export const loadBlogSuccess = createAction(
  LOAD_BLOG_SUCCESS,
  props<BlogsListModel>(),
);
export const loadBlogError = createAction(
  LOAD_BLOG_ERROR,
  props<BlogsListModel>(),
);

export const addBlog = createAction('addBlog', props<BlogActionAddModel>());

export const updateBlog = createAction(
  'updateBlog',
  props<BlogActionAddModel>(),
);

export const removeBlog = createAction('updateBlog', props<{ id: number }>());
