import httpStatusCodes from "../enum/HttpStatusCodes.js";
import { logInfo } from "../logger/logger.js";

export default class GetStatusAction{

    async execute(req, res){
        logInfo("Testing API health status");
        return res.status(httpStatusCodes.OK).end();
    }

};
