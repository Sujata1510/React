import express, { Router } from 'express';

import { loginUser, registerUser } from '../controllers/userController.js';
import { notAllowed } from '../utils/notAllowed.js';
import Joi from 'joi';
import exp from 'express-joi-validation';

const valid = exp.createValidator({});
const router = express.Router();

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  passworrd: Joi.string().min(5).max(20)
})

//userupdate
//resetpassword
//forgetpass
//userget
//useradd
//login
//register

router.route('/login').post(valid.body(loginSchema), loginUser).all(notAllowed);

router.route('/register').post(registerUser).all(notAllowed);

// router.route('/:id').get((req, res) => {

// }).patch();


export default router;