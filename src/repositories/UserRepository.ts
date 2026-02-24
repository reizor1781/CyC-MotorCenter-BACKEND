import User from '../models/User';

export class UserRepository {
    async findByUsername(username: string) {
        return await User.findOne({ where: { username } });
    }

    async create(user: any) {
        return await User.create(user);
    }
    async findAll() {
        return await User.findAll();
    }
    async findById(id: number) {
        return await User.findByPk(id);
    }
    async update(id: number, user: any) {
        return await User.update(user, { where: { id } });
    }
    async delete(id: number) {
        return await User.destroy({ where: { id } });
    }
}
