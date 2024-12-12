// Перечисления
enum BodyType {
    Sedan = "Sedan",
    Hatchback = "Hatchback",
    SUV = "SUV",
    Coupe = "Coupe",
    Convertible = "Convertible",
}

enum CarCategory { // Уникальное имя
    Economy = "Economy",
    Compact = "Compact",
    MidSize = "MidSize",
    FullSize = "FullSize",
    Luxury = "Luxury",
}

enum OwnerDocType { // Уникальное имя
    Passport = "Passport",
    DriverLicense = "DriverLicense",
    IdentityCard = "IdentityCard",
}

// Интерфейсы
interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    dateOfBirth: Date;
    documentType: OwnerDocType;
    documentSeries: string;
    documentNumber: string;
    printInfo(): void;
}

interface Vehicle {
    brand: string;
    model: string;
    yearOfManufacture: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printVehicleInfo(): void;
}

interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarCategory;
}

interface Motorbike extends Vehicle {
    frameType: string;
    isForSport: boolean;
}

// Реализация классов
class OwnerClass implements Owner {
    constructor(
        public lastName: string,
        public firstName: string,
        public middleName: string,
        public dateOfBirth: Date,
        public documentType: OwnerDocType,
        public documentSeries: string,
        public documentNumber: string
    ) {}

    printInfo(): void {
        console.log(`Владелец: ${this.lastName} ${this.firstName} ${this.middleName}`);
        console.log(`Дата рождения: ${this.dateOfBirth.toDateString()}`);
        console.log(`Документ: ${this.documentType} Серия: ${this.documentSeries}`);
        console.log(`Номер: ${this.documentNumber}`);
    }
}

abstract class BaseVehicle implements Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public yearOfManufacture: number,
        public vin: string,
        public registrationNumber: string,
        public owner: Owner
    ) {}

    abstract printVehicleInfo(): void;
}

class CarClass extends BaseVehicle implements Car {
    constructor(
        brand: string,
        model: string,
        yearOfManufacture: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        public bodyType: BodyType,
        public carClass: CarCategory
    ) {
        super(brand, model, yearOfManufacture, vin, registrationNumber, owner);
    }

    printVehicleInfo(): void {
        console.log(`Автомобиль: ${this.brand} ${this.model}`);
        console.log(`Год: ${this.yearOfManufacture}`);
        console.log(`VIN: ${this.vin}`);
        console.log(`Рег. номер: ${this.registrationNumber}`);
        console.log(`Тип кузова: ${this.bodyType}`);
        console.log(`Класс: ${this.carClass}`);
    }
}

class MotorbikeClass extends BaseVehicle implements Motorbike {
    constructor(
        brand: string,
        model: string,
        yearOfManufacture: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        public frameType: string,
        public isForSport: boolean
    ) {
        super(brand, model, yearOfManufacture, vin, registrationNumber, owner);
    }

    printVehicleInfo(): void {
        console.log(`Мотоцикл: ${this.brand} ${this.model}`);
        console.log(`Год: ${this.yearOfManufacture}`);
        console.log(`VIN: ${this.vin}`);
        console.log(`Рег. номер: ${this.registrationNumber}`);
        console.log(`Тип рамы: ${this.frameType}`);
        console.log(`Для спорта: ${this.isForSport ? "Да" : "Нет"}`)
    }
}

// Пример использования
const owner = new OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1990, 0, 1),
    OwnerDocType.Passport,
    "1234",
    "567890"
);

const car = new CarClass(
    "Toyota",
    "Camry",
    2021,
    "JTDBE32K610123456",
    "A123BC77",
    owner,
    BodyType.Sedan,
    CarCategory.MidSize
);

const motorbike = new MotorbikeClass(
    "Yamaha",
    "YZF-R1",
    2022,
    "JYARN39E2KA012345",
    "B123MC77",
    owner,
    "Sport Frame",
    true
);

car.printVehicleInfo();
motorbike.printVehicleInfo();
