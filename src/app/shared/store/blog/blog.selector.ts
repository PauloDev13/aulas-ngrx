import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BlogsListModel } from './blog.model';

const getBlogState = createFeatureSelector<BlogsListModel>('blog');

export const selectorBlogs = createSelector(
  getBlogState,
  (state: BlogsListModel) => {
    return state.blogList;
  },
);
