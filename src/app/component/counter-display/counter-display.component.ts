import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IState } from '../../shared/store/counter.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent implements OnInit {
  counterDisplay!: number;
  channelName = '';
  counter$!: Observable<IState>;

  // counterSubscription$: Subscription = new Subscription();

  constructor(private store: Store<{ counter: IState }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
    // this.counterSubscription$ = this.store.select('counter').subscribe({
    //   next: data => {
    //     this.counterDisplay = data.counter;
    //     this.channelName = data.channelName;
    //   },
    // });
  }

  // ngOnDestroy(): void {
  // if (this.counterSubscription$) {
  //   this.counterSubscription$.unsubscribe();
  // }
  // }
}
