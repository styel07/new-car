class Car {
  constructor(make, color, cost) {
    this.carMake = make;
    this.carColor = color;
    this.carCost = cost;
  }

  get make() {
    return this.carMake;
  }

  set make(make) {
    this.carMake = make;
  }

  get color() {
    return this.carColor;
  }

  set color(color) {
    this.carColor = color;
  }

  get cost() {
    return this.carCost;
  }

  set cost(cost) {
    this.carCost = cost;
  }
}