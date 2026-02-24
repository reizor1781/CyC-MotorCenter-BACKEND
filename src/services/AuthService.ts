import { UserRepository } from '../repositories/UserRepository';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export class AuthService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async login(cedula: string, password: string) { // In real apps, verify hash!
        const user = await this.userRepository.findByCedula(cedula);
        if (!user) {
            throw new Error('User not found');
        }

        // Simple comparison for educational purposes (Challenge: Implement hash check)
        // if (!bcrypt.compareSync(password, user.password)) {
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign(
            { id: user.id, cedula: user.cedula, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        return token;
    }
}
