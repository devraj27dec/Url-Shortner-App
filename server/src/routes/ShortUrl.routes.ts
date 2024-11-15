import express from 'express'
import { createUrl, deleteUrl, getAllUrl, getUrl } from '../controllers/shortUrl';
const router = express.Router()

router.route('/shortUrl').post(createUrl);
router.route('/shortUrl' ).get(getAllUrl)
router.route('/shortUrl/:id').get(getUrl);
router.route('/shortUrl/:id').delete(deleteUrl);


export default router;