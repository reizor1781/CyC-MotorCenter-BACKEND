import Car from "../models/Car";

export class CarRepository {
    async findAll() {
        return await Car.findAll();
    }
    async findById(id: number) {
        return await Car.findByPk(id);
    }
    async create(car: any) {
        return await Car.create(car);
    }
    async update(id: number, car: any) {
        return await Car.update(car, { where: { id } });
    }
    async delete(id: number) {
        return await Car.destroy({ where: { id } });
    }
}