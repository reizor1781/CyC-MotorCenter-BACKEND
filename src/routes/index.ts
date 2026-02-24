import { Router } from 'express';
import { login } from '../controllers/AuthController';
import { createUser, findAllUsers, findUserById, findUserByCedula, updateUser, deleteUser } from '../controllers/UserController';
import { createCar, findAllCars, findCarById, findCarByPlaca, updateCar, deleteCar } from '../controllers/CarController';
import { createBike, findAllBikes, findBikeById, findBikeByPlaca, updateBike, deleteBike } from '../controllers/BikeController';
import { authMiddleware } from '../middleware/auth';
import { upload } from '../utils/fileUpload';

const router = Router();

router.post('/login', login);

router.get('/users', authMiddleware, findAllUsers);
router.post('/users', authMiddleware, upload.single('photo'), createUser);
router.get('/users/:id', authMiddleware, findUserById);
router.get('/users/cedula/:cedula', authMiddleware, findUserByCedula);
router.put('/users/:id', authMiddleware, upload.single('photo'), updateUser);
router.delete('/users/:id', authMiddleware, deleteUser);

router.get('/cars', authMiddleware, findAllCars);
router.post('/cars', authMiddleware, upload.single('photo'), createCar);
router.get('/cars/:id', authMiddleware, findCarById);
router.get('/cars/placa/:placa', authMiddleware, findCarByPlaca);
router.put('/cars/:id', authMiddleware, upload.single('photo'), updateCar);
router.delete('/cars/:id', authMiddleware, deleteCar);

router.get('/bikes', authMiddleware, findAllBikes);
router.post('/bikes', authMiddleware, upload.single('photo'), createBike);
router.get('/bikes/:id', authMiddleware, findBikeById);
router.get('/bikes/placa/:placa', authMiddleware, findBikeByPlaca);
router.put('/bikes/:id', authMiddleware, upload.single('photo'), updateBike);
router.delete('/bikes/:id', authMiddleware, deleteBike);

export default router;
