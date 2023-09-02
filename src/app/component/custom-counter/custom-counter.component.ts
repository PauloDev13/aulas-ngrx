import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { customIncrement } from '../../shared/store/counter.actions';
import { IState } from '../../shared/store/counter.model';
import { selectorChannelName } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent implements OnInit, OnDestroy {
  counterInput!: number;
  actionType = 'add';
  channelName = '';
  counterSubscription$: Subscription = new Subscription();

  // constructor(private store: Store<{ counter: IState }>) {}

  private readonly store: Store = inject(Store<{ counter: IState }>);

  onCustomCounter() {
    this.store.dispatch(
      customIncrement({
        value: +this.counterInput,
        actionType: this.actionType,
      }),
    );
  }

  ngOnInit(): void {
    this.counterSubscription$ = this.store
      .select(selectorChannelName)
      .subscribe({
        next: data => {
          this.channelName = data;
        },
      });
  }

  ngOnDestroy(): void {
    if (this.counterSubscription$) {
      this.counterSubscription$.unsubscribe();
    }
  }
}
