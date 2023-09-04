export interface BlogModel {
  id: number | null;
  title: string;
  description: string;
}

export interface BlogsListModel {
  blogList: BlogModel[];
  message: string;
}

export interface BlogActionAddModel {
  blogInput: BlogModel;
  message: string;
}

export interface DialogParam {
  id: number | null;
  title: string;
  isEdit: boolean;
}

export type BlogsListType = BlogsListModel | undefined;

export const emptyBlog: BlogModel = {
  id: null,
  title: '',
  description: '',
};
