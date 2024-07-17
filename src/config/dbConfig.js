import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || 'carpooling',
    process.env.DB_ROOT_USERNAME || 'test',
    process.env.MYSQL_ROOT_PASSWORD || 'test',
    {
        host: process.env.DB_HOSTNAME || 'mysql',
        dialect: 'mysql'
    }
);