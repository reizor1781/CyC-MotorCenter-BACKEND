import { BikeRepository } from '../repositories/BikeRepository';

export class BikeService {
    private bikeRepository: BikeRepository;

    constructor() {
        this.bikeRepository = new BikeRepository();
    }

    async create(bike: any) {
        const existingBike = await this.bikeRepository.findByPlaca(bike.placa);
        if (existingBike) {
            throw new Error('Bike already exists');
        }
        return await this.bikeRepository.create(bike);
    }
    async findAll() {
        return await this.bikeRepository.findAll();
    }
    async findById(id: number) {
        return await this.bikeRepository.findById(id);
    }
    async update(id: number, bike: any) {
        return await this.bikeRepository.update(id, bike);
    }
    async delete(id: number) {
        return await this.bikeRepository.delete(id);
    }
    async findByPlaca(placa: string) {
        return await this.bikeRepository.findByPlaca(placa);
    }
}