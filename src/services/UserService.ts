import { UserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcryptjs';
export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(user: any) {
        const existingUser = await this.userRepository.findByCedula(user.cedula);
        if (existingUser) {
            throw new Error('User already exists');
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        return await this.userRepository.create(user);
    }
    async findAll() {
        return await this.userRepository.findAll();
    }
    async findById(id: number) {
        return await this.userRepository.findById(id);
    }
    async update(id: number, user: any) {
        return await this.userRepository.update(id, user);
    }
    async delete(id: number) {
        return await this.userRepository.delete(id);
    }
}
