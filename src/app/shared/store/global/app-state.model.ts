import { BlogModel } from '../blog/blog.model';
import { CounterModel } from '../counter.model';

export interface AppStateModel {
  counter: CounterModel;
  blog: BlogModel[];
}
