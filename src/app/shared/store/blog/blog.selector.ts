import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BlogModel, BlogsListModel } from './blog.model';

const getBlogState = createFeatureSelector<BlogsListModel>('blog');

export const selectorBlogs = createSelector(
  getBlogState,
  (state: BlogsListModel) => {
    return state.blogList;
  },
);

export const selectorBlogsInfo = createSelector(
  getBlogState,
  (state: BlogsListModel) => {
    return state;
  },
);

export const selectorBlogId = (blogId: number | null) =>
  createSelector(getBlogState, (state: BlogsListModel) => {
    return state.blogList.find((blog: BlogModel) => blog.id === blogId);
  });
