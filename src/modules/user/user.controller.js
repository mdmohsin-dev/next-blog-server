import { UserService } from "./user.service";
const createUser = async (req, res) => {
    try {
        const result = await UserService.createUser(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const getAllFromDB = async (req, res) => {
    try {
        const result = await UserService.getAllFromDB();
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const getUserById = async (req, res) => {
    try {
        const result = await UserService.getUserById(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const updateUser = async (req, res) => {
    try {
        const result = await UserService.updateUser(Number(req.params.id), req.body);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const deleteUser = async (req, res) => {
    try {
        const result = await UserService.deleteUser(Number(req.params.id));
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
export const UserController = {
    createUser,
    getAllFromDB,
    getUserById,
    updateUser,
    deleteUser
};
//# sourceMappingURL=user.controller.js.map