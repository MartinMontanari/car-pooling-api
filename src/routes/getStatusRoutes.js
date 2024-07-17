import { Router } from 'express';
import GetStatusAction  from "../actions/GetStatusAction.js";
import UploadCarsAndResetAppStateAction from "../actions/UploadCarsAndResetAppStateAction.js";

const router = Router();

router.get('/status', new GetStatusAction().execute);
router.put('/cars', new UploadCarsAndResetAppStateAction().execute);

export default router;