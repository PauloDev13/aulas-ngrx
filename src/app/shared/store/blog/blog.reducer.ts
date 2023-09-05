import { Action, createReducer, on } from '@ngrx/store';

import {
  createBlogSuccess,
  loadBlogError,
  loadBlogSuccess,
  removeBlog,
  updateBlog,
} from './blog.actions';
import {
  BlogActionAddModel,
  BlogModel,
  BlogsListModel,
  BlogsListType,
} from './blog.model';
import { blogState } from './blog.state';

const _blogReducer = createReducer(
  blogState,
  on(loadBlogSuccess, (state: BlogsListModel, action: BlogsListModel) => {
    return {
      ...state,
      blogList: [...action.blogList],
      message: '',
    };
  }),

  on(loadBlogError, (state: BlogsListModel, action: BlogsListModel) => {
    return {
      ...state,
      blogList: [],
      message: action.message,
    };
  }),

  on(createBlogSuccess, (state: BlogsListModel, action: BlogActionAddModel) => {
    const _blog = { ...action.blogInput };
    return {
      ...state,
      blogList: [...state.blogList, _blog],
    };
  }),

  on(updateBlog, (state: BlogsListModel, action: BlogActionAddModel) => {
    const updatedBlog = state.blogList.map((blog: BlogModel) => {
      return blog.id === action.blogInput.id ? action.blogInput : blog;
    });
    return {
      ...state,
      blogList: updatedBlog,
      message: '',
    };
  }),

  on(removeBlog, (state: BlogsListModel, action: { id: number }) => {
    const updatedBlog = state.blogList.filter(blog => {
      return blog.id !== action.id;
    });
    return {
      ...state,
      blogList: updatedBlog,
    };
  }),
);

export function blogReducer(state: BlogsListType, action: Action) {
  return _blogReducer(state, action);
}
