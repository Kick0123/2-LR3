// Тип перечисления для типа документа
enum OwnerDocumentType {
    Passport = "Passport",
    DriverLicense = "DriverLicense",
    IdentityCard = "IdentityCard",
}

// Интерфейс "Владелец"
interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    dateOfBirth: Date;
    documentType: OwnerDocumentType;
    documentSeries: string;
    documentNumber: string;
    printInfo(): void;
}

// Интерфейс "Транспортное средство"
interface Vehicle {
    brand: string;
    model: string;
    yearOfManufacture: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printVehicleInfo(): void;
}

// Класс "Владелец"
class OwnerClass implements Owner {
    constructor(
        public lastName: string,
        public firstName: string,
        public middleName: string,
        public dateOfBirth: Date,
        public documentType: OwnerDocumentType,
        public documentSeries: string,
        public documentNumber: string
    ) {}

    printInfo(): void {
        console.log(`Владелец: ${this.lastName} ${this.firstName} ${this.middleName}`);
        console.log(`Дата рождения: ${this.dateOfBirth.toDateString()}`);
        console.log(`Документ: ${this.documentType}, Серия: ${this.documentSeries}, Номер: ${this.documentNumber}`);
    }
}

// Класс "Транспортное средство"
class VehicleClass implements Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public yearOfManufacture: number,
        public vin: string,
        public registrationNumber: string,
        public owner: Owner
    ) {}

    printVehicleInfo(): void {
        console.log(`Транспортное средство: ${this.brand} ${this.model}`);
        console.log(`Год выпуска: ${this.yearOfManufacture}`);
        console.log(`VIN: ${this.vin}, Регистрационный номер: ${this.registrationNumber}`);
    }
}

// Пример использования
const owner = new OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1990, 0, 1),
    OwnerDocumentType.Passport,
    "1234",
    "567890"
);

const vehicle = new VehicleClass(
    "Toyota",
    "Camry",
    2021,
    "JTDBE32K610123456",
    "A123BC77",
    owner
);

owner.printInfo();
vehicle.printVehicleInfo();
