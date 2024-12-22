import express, { Router } from 'express';

import { loginUser } from '../controllers/userController.js';
import { notAllowed } from '../utils/notAllowed.js';

const router = express.Router();



//userupdate
//resetpassword
//forgetpass
//userget
//useradd
//login
//register

router.route('/login').post(loginUser).all(notAllowed);

// router.route('/register');

// router.route('/:id').get((req, res) => {

// }).patch();


export default router;