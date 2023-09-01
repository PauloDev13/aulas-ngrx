import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { customIncrement } from '../../shared/store/counter.actions';
import { IState } from '../../shared/store/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent {
  counterInput!: number;
  actionType = 'add';
  private store: Store = inject(Store<{ counter: IState }>);

  onCustomCounter() {
    this.store.dispatch(
      customIncrement({
        value: +this.counterInput,
        actionType: this.actionType,
      }),
    );
  }
}
