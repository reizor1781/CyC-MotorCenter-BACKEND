import { BikeService } from '../services/BikeSerivces';
import { Request, Response } from 'express';

const bikeService = new BikeService();

export const createBike = async (req: Request, res: Response) => {
    try {
        const bike = await bikeService.create(req.body);
        res.json(bike);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const findAllBikes = async (req: Request, res: Response) => {
    try {
        const bikes = await bikeService.findAll();
        res.json(bikes);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const findBikeById = async (req: Request, res: Response) => {
    try {
        const bike = await bikeService.findById(Number(req.params.id));
        if (!bike) {
            return res.status(404).json({ message: 'Bike not found' });
        }
        res.json(bike);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const findBikeByPlaca = async (req: Request, res: Response) => {
    try {
        const bike = await bikeService.findByPlaca(req.params.placa.toString());
        if (!bike) {
            return res.status(404).json({ message: 'Bike not found' });
        }
        res.json(bike);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateBike = async (req: Request, res: Response) => {
    try {
        const bike = await bikeService.update(Number(req.params.id), req.body);
        res.json(bike);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteBike = async (req: Request, res: Response) => {
    try {
        const bike = await bikeService.delete(Number(req.params.id));
        res.json(bike);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};