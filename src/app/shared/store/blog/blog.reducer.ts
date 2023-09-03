import { Action, createReducer, on } from '@ngrx/store';

import { addBlog, loadBlogs, updateBlog } from './blog.actions';
import {
  BlogActionAddModel,
  BlogsListModel,
  BlogsListType,
} from './blog.model';
import { blogState } from './blog.state';

const _blogReducer = createReducer(
  blogState,
  on(loadBlogs, (state: BlogsListModel) => {
    return {
      ...state,
    };
  }),

  on(addBlog, (state: BlogsListModel, action: BlogActionAddModel) => {
    const _blog = { ...action.blogInput };
    _blog.id = state.blogList.length + 1;
    return {
      ...state,
      blogList: [...state.blogList, _blog],
    };
  }),

  on(updateBlog, (state: BlogsListModel, action: BlogActionAddModel) => {
    const _blog = { ...action.blogInput };
    const updatedBlog = state.blogList.map(blog => {
      return _blog.id === blog.id ? _blog : blog;
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
