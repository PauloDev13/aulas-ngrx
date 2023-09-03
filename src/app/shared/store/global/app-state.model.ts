import { BlogsListModel } from '../blog/blog.model';
import { CounterModel } from '../counter.model';

export interface AppStateModel {
  counter: CounterModel;
  blog: BlogsListModel;
}
