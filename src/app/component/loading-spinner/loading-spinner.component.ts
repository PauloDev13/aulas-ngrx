import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStateModel } from '../../shared/store/global/app-state.model';
import { selectorSpinnerState } from '../../shared/store/global/app.selector';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinnerComponent implements OnInit {
  isLoaded = false;
  private readonly store: Store = inject(Store<AppStateModel>);

  ngOnInit() {
    this.store.select(selectorSpinnerState).subscribe({
      next: (res: boolean) => {
        this.isLoaded = res;
      },
    });
  }
}
