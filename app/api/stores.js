import express from 'express';
import Store from '../db/entity/store';
const router = express.Router();

router.post('/', function (req, res, next) {
  const id = req.body.id;
  Store.findOne({_id: id}, function (err, store) {
    if (err) throw next(err);
    if (store) {
      res.send(store);
    } else {
      res.send(false);
    }
  });
});
export default router;
