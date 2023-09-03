import { Component, inject } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { addBlog } from '../../../shared/store/blog/blog.actions';
import { BlogModel } from '../../../shared/store/blog/blog.model';
import { AppStateModel } from '../../../shared/store/global/app-state.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent {
  private readonly dialogRef = inject(MatDialogRef<AddBlogComponent>);
  private readonly formBuilder = inject(UntypedFormBuilder);
  blogForm = this.formBuilder.group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
  private readonly store = inject(Store<AppStateModel>);

  onSave() {
    if (this.blogForm.valid) {
      const _blogInput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title,
        description: this.blogForm.value.description,
      };

      this.store.dispatch(addBlog({ blogInput: _blogInput }));
      this.onCloseDialog();
    }
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}
