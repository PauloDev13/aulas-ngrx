import { Action, createReducer, on } from '@ngrx/store';

import { addBlog, loadBlogs } from './blog.actions';
import { BlogsListModel, BlogsListType } from './blog.model';
import { blogState } from './blog.state';

const _blogReducer = createReducer(
  blogState,
  on(loadBlogs, state => {
    return {
      ...state,
    };
  }),

  on(addBlog, (state: BlogsListModel, action) => {
    const _blog = { ...action.blogInput };
    _blog.id = state.blogList.length + 1;
    return {
      ...state,
      blogList: [...state.blogList, _blog],
    };
  }),
);

export function blogReducer(state: BlogsListType, action: Action) {
  return _blogReducer(state, action);
}
