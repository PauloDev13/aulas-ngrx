import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { BlogsListModel } from '../../shared/store/blog/blog.model';
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
    this.onOpenDialog();
  }

  onOpenDialog() {
    this.dialog.open(AddBlogComponent, {
      width: '40%',
    });
  }
}
