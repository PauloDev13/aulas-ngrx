import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { loadBlogs, removeBlog } from '../../shared/store/blog/blog.actions';
import {
  BlogsListModel,
  DialogParam,
} from '../../shared/store/blog/blog.model';
import { selectorBlogsInfo } from '../../shared/store/blog/blog.selector';
import { AppStateModel } from '../../shared/store/global/app-state.model';
import { AddBlogComponent } from './add-blog/add-blog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogList!: BlogsListModel;
  private readonly store: Store = inject(Store<AppStateModel>);
  private readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.store.dispatch(loadBlogs());
    this.store.select(selectorBlogsInfo).subscribe({
      next: (data: BlogsListModel) => {
        this.blogList = data;
      },
    });
  }

  onAddBlog() {
    this.onOpenDialog({ id: 0, title: 'Add Blog', isEdit: false });
  }

  onEditBlog(id: number | null) {
    if (id !== null) {
      this.onOpenDialog({ id, title: 'Edit Blog', isEdit: true });
    }
  }

  onRemoveBlog(id: number | null) {
    if (id !== null) {
      if (confirm('Remover Blog com ID: ' + id + '?')) {
        this.store.dispatch(removeBlog({ id: id }));
      }
    }
  }

  onOpenDialog(params: DialogParam) {
    this.dialog.open(AddBlogComponent, {
      width: '40%',
      data: params,
    });
  }
}
