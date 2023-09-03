import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { selectorCounter } from '../../shared/store/counter.selector';
import { AppStateModel } from '../../shared/store/global/app-state.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  counterDisplay!: number;
  counterSubscription$: Subscription = new Subscription();

  private readonly store: Store = inject(Store<AppStateModel>);

  // constructor(private store: Store<{ counter: IState }>) {}

  ngOnInit(): void {
    this.counterSubscription$ = this.store.select(selectorCounter).subscribe({
      next: data => {
        this.counterDisplay = data;
      },
    });
  }

  ngOnDestroy(): void {
    if (this.counterSubscription$) {
      this.counterSubscription$.unsubscribe();
    }
  }
}
