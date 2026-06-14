import express, { Router } from 'express';
import { AuthController } from './auth.controller.js';

const router = express.Router();

router.post(
    "/login",
    AuthController.loginWithEmailAndPassword
)
router.post(
    "/google",
    AuthController.authWithGoogle
)

export const AuthRouter: Router = router;