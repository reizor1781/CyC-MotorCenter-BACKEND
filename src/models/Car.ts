import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Car extends Model {
    public id!: number;
    public marca!: string;
    public modelo!: string;
    public year!: number;
    public placa!: string;
    public color!: string;
    public precio!: number;
}

Car.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        plate: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        employeeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'cars',
    }
);

export default Car;