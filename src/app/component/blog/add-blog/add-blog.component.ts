import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import {
  createBlog,
  updateBlog,
} from '../../../shared/store/blog/blog.actions';
import { BlogModel, DialogParam } from '../../../shared/store/blog/blog.model';
import { selectorBlogId } from '../../../shared/store/blog/blog.selector';
import { AppStateModel } from '../../../shared/store/global/app-state.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  dialogTitle = '';
  editBlogId: number | null = 0;

  public readonly data: DialogParam = inject(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<AddBlogComponent>);
  private readonly formBuilder = inject(UntypedFormBuilder);
  //form
  blogForm = this.formBuilder.group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
  private readonly store = inject(Store<AppStateModel>);

  ngOnInit(): void {
    this.dialogTitle = this.data.title;
    if (this.data.isEdit) {
      this.editBlogId = this.data.id;
      this.store.select(selectorBlogId(this.editBlogId)).subscribe({
        next: (data: BlogModel | undefined) => {
          this.blogForm.patchValue({
            id: data?.id,
            title: data?.title,
            description: data?.description,
          });
        },
      });
    }
  }

  onSave() {
    if (this.blogForm.valid) {
      const _blogInput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title,
        description: this.blogForm.value.description,
      };

      if (this.data.isEdit) {
        _blogInput.id = this.data.id;
        this.store.dispatch(updateBlog({ blogInput: _blogInput, message: '' }));
      } else {
        this.store.dispatch(createBlog({ blogInput: _blogInput, message: '' }));
      }

      this.onCloseDialog();
    }
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}
