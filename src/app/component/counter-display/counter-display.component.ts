import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IState } from '../../shared/store/counter.state';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent implements OnInit {
  counter!: number;

  constructor(private store: Store<{ counter: IState }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe({
      next: data => {
        this.counter = data.counter;
      },
    });
  }
}
