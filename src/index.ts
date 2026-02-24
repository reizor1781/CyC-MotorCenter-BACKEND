import express from 'express';
import cors from 'cors';
import path from 'path';

import sequelize from './config/database'; // conexión Sequelize
import './models/User'; // importa el modelo (importante)

import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/api', routes);

const startServer = async () => {
    try {
        // Verificar conexión
        await sequelize.authenticate();
        console.log('✅ Database connected');

        // Crear tablas si no existen
        await sequelize.sync();
        console.log('📦 Tables synchronized');

        app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
        });

    } catch (error) {
        console.error('❌ Database connection error:', error);
    }
};

startServer();