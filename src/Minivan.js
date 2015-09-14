import Car from './Car';
export default class Minivan extends Car {
  constructor(seats, gas, make, color, cost) {
    super(8, 100, make, color, cost);
    this.numSeats = seats;
    this.gasCapacity = gas;
  }

  get seats() {
    return this.numSeats;
  }

  set seats( seats) {
    this.numSeats = seats;
  }

  get gas() {
    return this.gasCapacity;
  }

  set gas( gas) {
    this.gasCapacity = gas;
  }

}