import app from './app.js';
import dotenv from 'dotenv';
import { sequelize } from './config/dbConfig.js';
import { logInfo, logError } from "./logger/logger.js";


const PORT = process.env.SERVER_PORT || 8080;

async function main(){
    try{
        //* Authenticate and connect to the database
        await sequelize.authenticate(); 
        logInfo("Connection has been established successfully.")
        //* Initialization
        dotenv.config();

        //* Starting the server
        app.listen(PORT, ()=> {
            logInfo(`Server listening on port ${PORT}`);
        })
    } catch(error){
        logError(`Unable to connect to the database ${error}`);
    }
}

main();