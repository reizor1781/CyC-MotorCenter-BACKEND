import { UserService } from '../services/UserService';
import { Request, Response } from 'express';

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.create(req.body);
        res.json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const findAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.findAll();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const findUserById = async (req: Request, res: Response) => {
    try {
        const user = await userService.findById(Number(req.params.id));
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const findUserByCedula = async (req: Request, res: Response) => {
    try {
        const user = await userService.findByCedula(req.params.cedula.toString());
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.update(Number(req.params.id), req.body);
        res.json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.delete(Number(req.params.id));
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
