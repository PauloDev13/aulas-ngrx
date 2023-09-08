import { Action, createReducer, on } from '@ngrx/store';

import {
  createBlogSuccess,
  loadBlogError,
  loadBlogs,
  loadBlogSuccess,
  removeBlogSuccess,
  updateBlogSuccess,
} from './blog.actions';
import { BlogModel, BlogsListModel, BlogsListType } from './blog.model';
import { blogState } from './blog.state';

const _blogReducer = createReducer(
  blogState,
  on(loadBlogs, (state: BlogsListModel) => ({
    ...state,
  })),

  // on(loadBlogs, (state: BlogsListModel) => {
  //   return {
  //     ...state,
  //     // isLoaded: false,
  //   };
  // }),

  on(
    loadBlogSuccess,
    (state: BlogsListModel, action: { blogList: BlogModel[] }) => {
      return {
        ...state,
        blogList: action.blogList,
        message: '',
        // isLoaded: false,
      };
    },
  ),

  on(loadBlogError, (state: BlogsListModel, action: { message: string }) => {
    return {
      ...state,
      blogList: [],
      message: action.message,
      // isLoaded: false,
    };
  }),

  on(
    createBlogSuccess,
    (state: BlogsListModel, action: { blogInput: BlogModel }) => {
      const newBlog = { ...action.blogInput };
      return {
        ...state,
        blogList: [...state.blogList, newBlog],
        // isLoaded: false,
      };
    },
  ),

  on(
    updateBlogSuccess,
    (state: BlogsListModel, action: { blogInput: BlogModel }) => {
      const _blogUpdated = { ...action.blogInput };
      const updatedBlog = state.blogList.map((blog: BlogModel) => {
        return _blogUpdated.id === blog.id ? _blogUpdated : blog;
      });
      return {
        ...state,
        blogList: updatedBlog,
        // isLoaded: false,
      };
    },
  ),

  on(removeBlogSuccess, (state: BlogsListModel, action: { id: number }) => {
    const blogList = state.blogList.filter((blog: BlogModel) => {
      return blog.id !== action.id;
    });
    return {
      ...state,
      blogList,
      // isLoaded: false,
    };
  }),
);

export function blogReducer(state: BlogsListType, action: Action) {
  return _blogReducer(state, action);
}
