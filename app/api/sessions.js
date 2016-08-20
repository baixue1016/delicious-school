import express from 'express';
import User from '../db/entity/user';
import validateLogin from '../../share/validate-login';
const router = express.Router();

router.post('/', function (req, res, next) {
  const requestUser = {
    username: req.body.username,
    password: req.body.password
  };
  
  const isValidate = validateLogin(requestUser);
  if (isValidate) {
    User.find({username: requestUser.username}, function (err, users) {
      if (err) return next(err);
      if (users) {
        return res.sendStatus(409);
      }

    })
  } else {
    return res.sendStatus(201);
  }
});

export default router;
