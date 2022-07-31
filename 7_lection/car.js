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
    set brand(brandValue) {
        if (!isBrandOrModelValid(brandValue)) {
            throw new Error ('Невалидное название бренда автомобиля');
        } 
        this.#brand = brandValue;
    }
    get brand() {
        return this.#brand;
    }
    set model(modelValue) {
        if (!isBrandOrModelValid(modelValue)) {
            throw new Error ('Невалидное название модели автомобиля');
        }
        this.#model = modelValue;
    }
    get model() {
        return this.#model;
    }
    set yearOfManufacturing(yearOfManufacturingValue) {
        if (!isYearOfManufacturingValid(yearOfManufacturingValue)) { 
            throw new Error ('Невалидный год выпуска автомобиля');
        }
        this.#yearOfManufacturing = yearOfManufacturingValue;
    }
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }
    set maxSpeed(maxSpeedValue) {
        if (!isMaxSpeedValid(maxSpeedValue)) {
            throw new Error ('Невалидное значение максимальной скорости автомобиля');
        }
        this.#maxSpeed = maxSpeedValue;
    }
    get maxSpeed() {
        return this.#maxSpeed;
    }
    set maxFuelVolume(maxFuelVolumeValue) {
        if (!isMaxFuelVolumValid(maxFuelVolumeValue)) {
            throw new Error ('Невалидное значение максимального объема бензобака автомобиля');
        }
        this.#maxFuelVolume = maxFuelVolumeValue;
    }
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }
    set fuelConsumption(fuelConsumptionValue) {
        if (!isFuelConsumption(fuelConsumptionValue)) {
            throw new Error ('Невалидное значение расхода бензина в литрах на 100 км');
        }
        this.#fuelConsumption = fuelConsumptionValue;
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
    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        if (!isBrandOrModelValid(brand)) {
            throw new Error ('Невалидное название бренда автомобиля');
        }
        if (!isBrandOrModelValid(model)) {
            throw new Error ('Невалидное название модели автомобиля');
        }
        if (!isYearOfManufacturingValid(yearOfManufacturing)) { 
            throw new Error ('Невалидный год выпуска автомобиля');
        }
        if (!isMaxSpeedValid(maxSpeed)) {
            throw new Error ('Невалидное значение максимальной скорости автомобиля');
        }
        if (!isMaxFuelVolumValid(maxFuelVolume)) {
            throw new Error ('Невалидное значение максимального объема бензобака автомобиля');
        }
        if (!isFuelConsumption(fuelConsumption)) {
            throw new Error ('Невалидное значение расхода бензина в литрах на 100 км');
        }
        this.#brand = brand;
        this.#model = model;
        this.#yearOfManufacturing = yearOfManufacturing;
        this.#maxSpeed = maxSpeed;
        this.#maxFuelVolume = maxFuelVolume;
        this.#fuelConsumption = fuelConsumption;
        this.start = this.start.bind(this);
        this.shutDownEngine = this.shutDownEngine.bind(this);
        this.fillUpGasTank = this.fillUpGasTank.bind(this);
        this.drive = this.drive.bind(this);   
    }
    start() {
        if (this.#isStarted) {
            throw new Error ('Машина уже заведена');
        }
        this.#isStarted = true;
    }
    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error ('Машина ещё не заведена');
        }
        this.#isStarted = false;
    }
    fillUpGasTank(fuelVolume) {
        if (typeof fuelVolume !== 'number' || isNaN(fuelVolume) || !isFinite(fuelVolume) || !(fuelVolume > 0)) {
            throw new Error ('Неверное количество топлива для заправки');
        }
        if (this.#currentFuelVolume + fuelVolume > this.#maxFuelVolume) {
            throw new Error ('Топливный бак переполнен');
        }
        this.#currentFuelVolume += fuelVolume;
    }
    drive(carSpeed, countOfHours) {
        if (typeof carSpeed !== 'number' || isNaN(carSpeed) || !isFinite(carSpeed) || !(carSpeed > 0)) {
            throw new Error ('Неверная скорость');
        }
        if (typeof countOfHours !== 'number' || isNaN(countOfHours) || !isFinite(countOfHours) || !(countOfHours > 0)) {
            throw new Error ('Неверное количество часов');
        }
        if (carSpeed > this.#maxSpeed) {
            throw new Error ('Машина не может ехать так быстро');
        }
        if (!this.#isStarted) {
            throw new Error ('Машина должна быть заведена, чтобы ехать');
        }
        if (this.#fuelConsumption * carSpeed * countOfHours / 100 > this.#currentFuelVolume) {
            throw new Error ('Недостаточно топлива');
        }
        this.#currentFuelVolume -= this.#fuelConsumption * carSpeed * countOfHours / 100; 
        this.#mileage += carSpeed * countOfHours;
    }

}
const isBrandOrModelValid = (testBrandOrModel) => {
    return !(typeof testBrandOrModel !== 'string' || !(testBrandOrModel.length > 1 && testBrandOrModel.length < 51));
}
const isYearOfManufacturingValid = (testYearOfManufacturing) => {
    return !(!Number.isInteger(testYearOfManufacturing) || !(testYearOfManufacturing >= 1900 && testYearOfManufacturing <= (new Date()).getFullYear()));
}
const isMaxSpeedValid = (testMaxSpeed) => {
    return !(typeof testMaxSpeed !== 'number' || !(testMaxSpeed >= 100 && testMaxSpeed <= 300));
}
const isMaxFuelVolumValid = (testMaxFuelVolum) => {
    return !(typeof testMaxFuelVolum !== 'number' || !(testMaxFuelVolum >= 5 && testMaxFuelVolum <= 20));
}
const isFuelConsumption = (testFuelConsumption) => {
    return !(typeof testFuelConsumption !== 'number' || !(testFuelConsumption >= 1.2 && testFuelConsumption <= 3));
}