import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BlogModel } from '../../shared/store/blog/blog.model';
import { selectorBlogs } from '../../shared/store/blog/blog.selector';
import { AppStateModel } from '../../shared/store/global/app-state.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: BlogModel[] = [];
  private readonly store: Store = inject(Store<AppStateModel>);

  ngOnInit(): void {
    this.store.select(selectorBlogs).subscribe({
      next: value => {
        this.blogs = value;
      },
    });
  }
}
