// Интерфейс Транспортное средство
interface Vehicle {
    brand: string;
    model: string;
    yearOfManufacture: number;
    vin: string;
    registrationNumber: string;
    printVehicleInfo(): void;
}

// Интерфейс Хранилище
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

// Реализация класса Хранилище
class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];

    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }

    // Метод для получения всех транспортных средств
    getAllVehicles(): T[] {
        return this.vehicles;
    }

    // Метод для добавления транспортного средства в хранилище
    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }
}

// Пример реализации транспорта
class Car implements Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public yearOfManufacture: number,
        public vin: string,
        public registrationNumber: string
    ) {}

    printVehicleInfo(): void {
        console.log(`Автомобиль: ${this.brand} ${this.model}`);
        console.log(`Год: ${this.yearOfManufacture}`);
        console.log(`VIN: ${this.vin}`);
        console.log(`Рег. номер: ${this.registrationNumber}`);
    }
}

// Пример использования хранилища
const carStorage = new VehicleStorageClass<Car>();

const car1 = new Car("Toyota", "Camry", 2021, "JTDBE32K610123456", "A669BC77");
const car2 = new Car("Honda", "Civic", 2020, "2HGFC2F69LH1321354", "B456DE32132");

// Добавляем автомобили в хранилище
carStorage.addVehicle(car1);
carStorage.addVehicle(car2);

// Получаем все автомобили из хранилища
const storedCars = carStorage.getAllVehicles();
storedCars.forEach((car) => car.printVehicleInfo());

console.log(`Дата создания хранилища: ${carStorage.creationDate.toISOString()}`);
