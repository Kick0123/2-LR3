// Реализация класса Хранилище
var VehicleStorageClass = /** @class */ (function () {
    function VehicleStorageClass() {
        this.creationDate = new Date();
        this.vehicles = [];
    }
    // Метод для получения всех транспортных средств
    VehicleStorageClass.prototype.getAllVehicles = function () {
        return this.vehicles;
    };
    // Метод для добавления транспортного средства в хранилище
    VehicleStorageClass.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    return VehicleStorageClass;
}());
// Пример реализации транспорта
var Car = /** @class */ (function () {
    function Car(brand, model, yearOfManufacture, vin, registrationNumber) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
    }
    Car.prototype.printVehicleInfo = function () {
        console.log("\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C: ".concat(this.brand, " ").concat(this.model));
        console.log("\u0413\u043E\u0434: ".concat(this.yearOfManufacture));
        console.log("VIN: ".concat(this.vin));
        console.log("\u0420\u0435\u0433. \u043D\u043E\u043C\u0435\u0440: ".concat(this.registrationNumber));
    };
    return Car;
}());
// Пример использования хранилища
var carStorage = new VehicleStorageClass();
var car1 = new Car("Toyota", "Camry", 2021, "JTDBE32K610123456", "A669BC77");
var car2 = new Car("Honda", "Civic", 2020, "2HGFC2F69LH1321354", "B456DE32132");
// Добавляем автомобили в хранилище
carStorage.addVehicle(car1);
carStorage.addVehicle(car2);
// Получаем все автомобили из хранилища
var storedCars = carStorage.getAllVehicles();
storedCars.forEach(function (car) { return car.printVehicleInfo(); });
console.log("\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430: ".concat(carStorage.creationDate.toISOString()));
