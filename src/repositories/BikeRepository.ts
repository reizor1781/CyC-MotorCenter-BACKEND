import Bike from "../models/Bike";

export class BikeRepository {
    async findAll() {
        return await Bike.findAll();
    }
    async findById(id: number) {
        return await Bike.findByPk(id);
    }
    async findByPlaca(placa: string) {
        return await Bike.findOne({ where: { placa } });
    }
    async create(bike: any) {
        return await Bike.create(bike);
    }
    async update(id: number, bike: any) {
        return await Bike.update(bike, { where: { id } });
    }
    async delete(id: number) {
        return await Bike.destroy({ where: { id } });
    }
}