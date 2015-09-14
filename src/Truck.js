import Car from './Car';
export default class Truck extends Car {
  constructor(seats, gas, wheels, make, color, cost) {
    super(8, 100, 6, make, color, cost);
    this.numSeats = seats;
    this.gasCapacity = gas;
    this.numWheels = wheels;
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