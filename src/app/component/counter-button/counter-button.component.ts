import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  changeChannelName,
  decrement,
  increment,
  reset,
} from '../../shared/store/counter.actions';
import { IState } from '../../shared/store/counter.model';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent {
  constructor(private store: Store<{ counter: IState }>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  onRename() {
    this.store.dispatch(
      changeChannelName({ channel: 'Bem vindo ao Mimos.Feltro' }),
    );
  }
}
