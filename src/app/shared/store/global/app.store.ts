import { blogReducer } from '../blog/blog.reducer';
import { counterReducer } from '../counter.reducer';
import { appReducer } from './app.reducer';

export const AppStore = {
  counter: counterReducer,
  blog: blogReducer,
  app: appReducer,
};
