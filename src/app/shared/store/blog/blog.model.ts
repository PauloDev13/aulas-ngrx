export interface BlogModel {
  id: number | null;
  title: string;
  description: string;
}

export interface BlogsListModel {
  blogList: BlogModel[];
}

export type BlogsListType = BlogsListModel | undefined;
