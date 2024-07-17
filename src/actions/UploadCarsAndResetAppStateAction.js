import UploadCarsAndResetAppStateAdapter from '../adapters/UploadCarsAndResetAppStateAdapter.js'

export default class UploadCarsAndResetAppStateAction{
    execute(req,res){
        if(!req.body && !req.headers['content-type']!="application/json"){
            return res.status(400).end();
        }
        const validatedRequest = new UploadCarsAndResetAppStateAdapter().adapt(req);
        console.log(validatedRequest);
    }
}