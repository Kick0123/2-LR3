// Тип перечисления для типа документа
var OwnerDocumentType;
(function (OwnerDocumentType) {
    OwnerDocumentType["Passport"] = "Passport";
    OwnerDocumentType["DriverLicense"] = "DriverLicense";
    OwnerDocumentType["IdentityCard"] = "IdentityCard";
})(OwnerDocumentType || (OwnerDocumentType = {}));
// Класс "Владелец"
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
        console.log("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442: ".concat(this.documentType, ", \u0421\u0435\u0440\u0438\u044F: ").concat(this.documentSeries, ", \u041D\u043E\u043C\u0435\u0440: ").concat(this.documentNumber));
    };
    return OwnerClass;
}());
// Класс "Транспортное средство"
var VehicleClass = /** @class */ (function () {
    function VehicleClass(brand, model, yearOfManufacture, vin, registrationNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    VehicleClass.prototype.printVehicleInfo = function () {
        console.log("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E: ".concat(this.brand, " ").concat(this.model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this.yearOfManufacture));
        console.log("VIN: ".concat(this.vin, ", \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ").concat(this.registrationNumber));
    };
    return VehicleClass;
}());
// Пример использования
var owner = new OwnerClass("Иванов", "Иван", "Иванович", new Date(1990, 0, 1), OwnerDocumentType.Passport, "1234", "567890");
var vehicle = new VehicleClass("Toyota", "Camry", 2021, "JTDBE32K610123456", "A123BC77", owner);
owner.printInfo();
vehicle.printVehicleInfo();
