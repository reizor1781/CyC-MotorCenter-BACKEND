import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Bike extends Model {
    public id!: number;
    public marca!: string;
    public modelo!: string;
    public year!: number;
    public placa!: string;
    public color!: string;
    public precio!: number;
    public photoUrl!: string;
}

Bike.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        placa: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        photoUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'bikes',
    }
);

export default Bike;
