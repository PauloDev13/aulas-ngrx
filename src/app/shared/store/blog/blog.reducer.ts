import { Action, createReducer, on } from '@ngrx/store';

import { loadBlogs } from './blog.actions';
import { BlogModel } from './blog.model';
import { blogState } from './blog.state';

const _blogReducer = createReducer(
  blogState,
  on(loadBlogs, state => {
    return {
      ...state,
    };
  }),
);

export function blogReducer(state: BlogModel[] | undefined, action: Action) {
  return _blogReducer(state, action);
}
