import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BlogModel } from './blog.model';

const getBlogState = createFeatureSelector<BlogModel[]>('blog');

export const selectorBlogs = createSelector(
  getBlogState,
  (state: BlogModel[]) => {
    return state;
  },
);
