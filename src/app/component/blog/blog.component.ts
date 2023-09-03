import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { removeBlog } from '../../shared/store/blog/blog.actions';
import {
  BlogsListModel,
  DialogParam,
} from '../../shared/store/blog/blog.model';
import { selectorBlogs } from '../../shared/store/blog/blog.selector';
import { AppStateModel } from '../../shared/store/global/app-state.model';
import { AddBlogComponent } from './add-blog/add-blog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: BlogsListModel = { blogList: [] };
  private readonly store: Store = inject(Store<AppStateModel>);
  private readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.store.select(selectorBlogs).subscribe({
      next: value => {
        this.blogs.blogList = value;
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
      alert('Blogo com ID: ' + id + ' removido');
    }
  }

  onOpenDialog(params: DialogParam) {
    this.dialog.open(AddBlogComponent, {
      width: '40%',
      data: params,
    });
  }
}
