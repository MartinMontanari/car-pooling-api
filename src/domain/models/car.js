import { DataType } from "sequelize";
import { sequelize } from "../../config/dbConfig";

sequelize.define('cars',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    seats: {
        type: DataTypes.INTEGER
    }
});