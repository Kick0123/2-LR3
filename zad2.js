var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Перечисления
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "Sedan";
    BodyType["Hatchback"] = "Hatchback";
    BodyType["SUV"] = "SUV";
    BodyType["Coupe"] = "Coupe";
    BodyType["Convertible"] = "Convertible";
})(BodyType || (BodyType = {}));
var CarCategory;
(function (CarCategory) {
    CarCategory["Economy"] = "Economy";
    CarCategory["Compact"] = "Compact";
    CarCategory["MidSize"] = "MidSize";
    CarCategory["FullSize"] = "FullSize";
    CarCategory["Luxury"] = "Luxury";
})(CarCategory || (CarCategory = {}));
var OwnerDocType;
(function (OwnerDocType) {
    OwnerDocType["Passport"] = "Passport";
    OwnerDocType["DriverLicense"] = "DriverLicense";
    OwnerDocType["IdentityCard"] = "IdentityCard";
})(OwnerDocType || (OwnerDocType = {}));
// Реализация классов
var OwnerClass = /** @class */ (function () {
    function OwnerClass(lastName, firstName, middleName, dateOfBirth, documentType, documentSeries, documentNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.dateOfBirth = dateOfBirth;
        this.documentType = documentType;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }
    OwnerClass.prototype.printInfo = function () {
        console.log("\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446: ".concat(this.lastName, " ").concat(this.firstName, " ").concat(this.middleName));
        console.log("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(this.dateOfBirth.toDateString()));
        console.log("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442: ".concat(this.documentType, " \u0421\u0435\u0440\u0438\u044F: ").concat(this.documentSeries));
        console.log("\u041D\u043E\u043C\u0435\u0440: ".concat(this.documentNumber));
    };
    return OwnerClass;
}());
var BaseVehicle = /** @class */ (function () {
    function BaseVehicle(brand, model, yearOfManufacture, vin, registrationNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    return BaseVehicle;
}());
var CarClass = /** @class */ (function (_super) {
    __extends(CarClass, _super);
    function CarClass(brand, model, yearOfManufacture, vin, registrationNumber, owner, bodyType, carClass) {
        var _this = _super.call(this, brand, model, yearOfManufacture, vin, registrationNumber, owner) || this;
        _this.bodyType = bodyType;
        _this.carClass = carClass;
        return _this;
    }
    CarClass.prototype.printVehicleInfo = function () {
        console.log("\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C: ".concat(this.brand, " ").concat(this.model));
        console.log("\u0413\u043E\u0434: ".concat(this.yearOfManufacture));
        console.log("VIN: ".concat(this.vin));
        console.log("\u0420\u0435\u0433. \u043D\u043E\u043C\u0435\u0440: ".concat(this.registrationNumber));
        console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this.bodyType));
        console.log("\u041A\u043B\u0430\u0441\u0441: ".concat(this.carClass));
    };
    return CarClass;
}(BaseVehicle));
var MotorbikeClass = /** @class */ (function (_super) {
    __extends(MotorbikeClass, _super);
    function MotorbikeClass(brand, model, yearOfManufacture, vin, registrationNumber, owner, frameType, isForSport) {
        var _this = _super.call(this, brand, model, yearOfManufacture, vin, registrationNumber, owner) || this;
        _this.frameType = frameType;
        _this.isForSport = isForSport;
        return _this;
    }
    MotorbikeClass.prototype.printVehicleInfo = function () {
        console.log("\u041C\u043E\u0442\u043E\u0446\u0438\u043A\u043B: ".concat(this.brand, " ").concat(this.model));
        console.log("\u0413\u043E\u0434: ".concat(this.yearOfManufacture));
        console.log("VIN: ".concat(this.vin));
        console.log("\u0420\u0435\u0433. \u043D\u043E\u043C\u0435\u0440: ".concat(this.registrationNumber));
        console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this.frameType));
        console.log("\u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: ".concat(this.isForSport ? "Да" : "Нет"));
    };
    return MotorbikeClass;
}(BaseVehicle));
// Пример использования
var owner = new OwnerClass("Иванов", "Иван", "Иванович", new Date(1990, 0, 1), OwnerDocType.Passport, "1234", "567890");
var car = new CarClass("Toyota", "Camry", 2021, "JTDBE32K610123456", "A123BC77", owner, BodyType.Sedan, CarCategory.MidSize);
var motorbike = new MotorbikeClass("Yamaha", "YZF-R1", 2022, "JYARN39E2KA012345", "B123MC77", owner, "Sport Frame", true);
car.printVehicleInfo();
motorbike.printVehicleInfo();
