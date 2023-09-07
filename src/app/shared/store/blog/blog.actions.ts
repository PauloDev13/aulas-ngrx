import { createAction, props } from '@ngrx/store';

import { BlogModel } from './blog.model';

// Declaration constants for actions load
export const LOAD_BLOG = '[blog page] load blogs';
export const LOAD_BLOG_SUCCESS = '[blog page] load blog success';
export const LOAD_BLOG_ERROR = '[blog page] load blog error';

// Declaration constants for actions create
export const CREATE_BLOG = '[blog page] create blog';
export const CREATE_BLOG_SUCCESS = '[blog page] create blog success';

// Declaration constants for actions update
export const UPDATE_BLOG = '[blog page] update blog';
export const UPDATE_BLOG_SUCCESS = '[blog page] update blog success';

// Declaration constants for actions update
export const REMOVE_BLOG = '[blog page] remove blog';
export const REMOVE_BLOG_SUCCESS = '[blog page] remove blog success';

// Actions loading blogs
export const loadBlogs = createAction(LOAD_BLOG);

export const loadBlogSuccess = createAction(
  LOAD_BLOG_SUCCESS,
  props<{ blogList: BlogModel[] }>(),
);
export const loadBlogError = createAction(
  LOAD_BLOG_ERROR,
  props<{ message: string }>(),
);

// Actions creating blogs
export const createBlog = createAction(
  CREATE_BLOG,
  props<{ blogInput: BlogModel }>(),
);

export const createBlogSuccess = createAction(
  CREATE_BLOG_SUCCESS,
  props<{ blogInput: BlogModel }>(),
);

// Actions updating blogs
export const updateBlog = createAction(
  UPDATE_BLOG,
  props<{ blogInput: BlogModel }>(),
);

export const updateBlogSuccess = createAction(
  CREATE_BLOG_SUCCESS,
  props<{ blogInput: BlogModel }>(),
);

// Actions deleting blogs
export const removeBlog = createAction(REMOVE_BLOG, props<{ id: number }>());

export const removeBlogSuccess = createAction(
  REMOVE_BLOG_SUCCESS,
  props<{ id: number }>(),
);
