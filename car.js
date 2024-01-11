class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
    this.brand = brand;
    this.model = model;
    this.yearOfManufacturing = yearOfManufacturing;
    this.maxSpeed = maxSpeed;
    this.maxFuelVolume = maxFuelVolume;
    this.fuelConsumption = fuelConsumption;
  }

  set brand(brandName) {
    if (!isValidString(brandName, 50)) {
      throw new Error('Невалидное значение бренда')
    }

    this.#brand = brandName;
  }

  get brand() {
    return this.#brand;
  }

  set model(modelName) {
    if (!isValidString(modelName, 50)) {
      throw new Error('Невалидное значение модели')
    }

    this.#model = modelName;
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(year) {
    if (!isValidYear(year)) {
      throw new Error('Невалидный год');
    }

    this.#yearOfManufacturing = year;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(value) {
    if (!isNumber(value) || !isNumberInRange(value, 100, 300)) {
      throw new Error('Неверная скорость');
    }

    this.#maxSpeed = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxFuelVolume(value) {
    if (!isNumber(value) || !isNumberInRange(value, 5, 20)) {
      throw new Error('Невалидное значение топлива');
    }

    this.#maxFuelVolume = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(value) {
    if (!isNumber(value) || value <= 0) {
      throw new Error('Неверно указан расход топлива');
    }

    this.#fuelConsumption = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }

    this.#isStarted = false;
  }

  fillUpGasTank(gasAmount) {
    if (!isNumber(gasAmount) || gasAmount <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (gasAmount + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume += gasAmount;
  }

  drive(speed, hours) {
    if (!isNumber(speed) || speed <= 0) {
      throw new Error('Неверная скорость');
    }

    if (!isNumber(hours) || hours <= 0) {
      throw new Error('Неверное количество часов');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }

    const traveledDistance = speed * hours;
    const neededGasAmount = traveledDistance / 100 * this.#fuelConsumption;

    if (neededGasAmount > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume -= neededGasAmount;
    this.#mileage += traveledDistance;
  }
}

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isValidString(value, maxLength) {
  if (typeof value !== 'string') {
    return false;
  }

  const strLength = value.length;

  return strLength >= 1 && strLength <= maxLength;
}

function isValidYear(value) {
  const currentYear = new Date().getFullYear();

  if (!isNumber(value) || !Number.isInteger(value)) {
    return false;
  }

  return value >= 1900 && value <= currentYear;
}

function isNumberInRange(number, min, max) {
  return number >= min && number <= max;
}

export class Car;
