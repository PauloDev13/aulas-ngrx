import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IState } from '../../shared/store/counter.model';
import { selectorCounter } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  counterDisplay!: number;
  counterSubscription$: Subscription = new Subscription();

  private readonly store: Store = inject(Store<{ counter: IState }>);

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
