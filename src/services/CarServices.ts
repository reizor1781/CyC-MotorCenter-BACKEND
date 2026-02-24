import { CarRepository } from '../repositories/CarRepository';

export class CarService {
    private carRepository: CarRepository;

    constructor() {
        this.carRepository = new CarRepository();
    }

    async create(car: any) {
        const existingCar = await this.carRepository.findByPlaca(car.placa);
        if (existingCar) {
            throw new Error('Car already exists');
        }
        return await this.carRepository.create(car);
    }
    async findAll() {
        return await this.carRepository.findAll();
    }
    async findById(id: number) {
        return await this.carRepository.findById(id);
    }
    async update(id: number, car: any) {
        return await this.carRepository.update(id, car);
    }
    async delete(id: number) {
        return await this.carRepository.delete(id);
    }
    async findByPlaca(placa: string) {
        return await this.carRepository.findByPlaca(placa);
    }
}