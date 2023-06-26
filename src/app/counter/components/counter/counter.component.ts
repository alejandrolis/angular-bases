import { Component } from '@angular/core';

@Component({
  selector : 'app-counter',
  template : `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  private initCounterValue : number = 10;
  public counter : number = this.initCounterValue;

  constructor() {}

  public increaseBy(value : number) : void {
    this.counter += value;
  }

  public reset() {
    this.counter = this.initCounterValue;
  }
}
