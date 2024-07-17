import  joi  from 'joi';
import { logError } from '../logger/logger.js';

export default class UploadCarsAndResetAppStateAdapter{
    adapt(req){
       const schema = joi.array().items(
            joi.object().keys({
                id: joi.number().required(),
                seats: joi.number().required()
            })
       );
       console.log(req.body)
       const {error, value} = schema.validate([{id: req.body.id, seats: req.body.seats}]);
       if(error){
        logError(`An error has occurred while validating the body ${error}`);
        return error
       } 
       console.log("ACAAAAAAAAAAAAAAAAAAAAA",value)
       return value;
    }
}