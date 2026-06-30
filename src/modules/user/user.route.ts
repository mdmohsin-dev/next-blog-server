import express, { Router } from 'express';
import { UserController } from './user.controller.ts';

const router = express.Router();

router.get(
    "/",
    UserController.getAllFromDB
)

router.get(
    "/:id",
    UserController.getUserById
)

router.post(
    "/",
    UserController.createUser
)

router.patch(
    "/:id",
    UserController.updateUser
)

router.delete(
    "/:id",
    UserController.deleteUser
)

export const UserRouter:Router = router;