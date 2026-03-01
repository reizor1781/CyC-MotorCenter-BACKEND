import { CarService } from '../services/CarServices';
import { Request, Response } from 'express';

const carService = new CarService();

export const createCar = async (req: Request, res: Response) => {
    try {
        const car = await carService.create(req.body);
        res.json(car);
        if (req.file) {
            car.photoUrl = `/uploads/${req.file.filename}`;
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const findAllCars = async (req: Request, res: Response) => {
    try {
        const cars = await carService.findAll();
        res.json(cars);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const findCarById = async (req: Request, res: Response) => {
    try {
        const car = await carService.findById(Number(req.params.id));
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const findCarByPlate = async (req: Request, res: Response) => {
    try {
        const car = await carService.findByPlate(req.params.plate.toString());
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCar = async (req: Request, res: Response) => {
    try {
        const car = await carService.update(Number(req.params.id), req.body);
        res.json(car);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCar = async (req: Request, res: Response) => {
    try {
        const car = await carService.delete(Number(req.params.id));
        res.json(car);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};