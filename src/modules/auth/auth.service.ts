import { prisma } from "../../../lib/prisma";

const loginWithEmailAndPassword = async ({ email, password }: { email: string, password: string }) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (!user) {
        throw new Error("User not found!")
    }

    if (password === user.password) {
        return user
    }
    else {
        throw new Error("Password is incorrect!")
    }
}

const authWithGoogle = async (data: { email: string; name?: string; picture?: string }) => {
    let user = await prisma.user.findUnique({
        where: { email: data.email }
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                email: data.email,
                name: data.name ?? null,
                picture: data.picture ?? null,
            }
        });
    }

    return user;
};

export const AuthService = {
    loginWithEmailAndPassword,
    authWithGoogle
}