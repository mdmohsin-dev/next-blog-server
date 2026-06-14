import { prisma } from "../../../lib/prisma";
const createUser = async (payload) => {
    const createdUser = await prisma.user.create({
        data: payload
    });
    return createdUser;
};
const getAllFromDB = async () => {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
            role: true,
            status: true,
            posts: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return result;
};
const getUserById = async (id) => {
    const result = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
            status: true,
            posts: true
        }
    });
    return result;
};
const updateUser = async (id, payload) => {
    const result = await prisma.user.update({
        where: {
            id
        },
        data: payload
    });
    return result;
};
const deleteUser = async (id) => {
    const result = await prisma.user.delete({
        where: {
            id
        }
    });
    return result;
};
export const UserService = {
    createUser,
    getAllFromDB,
    getUserById,
    updateUser,
    deleteUser
};
//# sourceMappingURL=user.service.js.map