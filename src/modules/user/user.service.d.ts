import type { Prisma, User } from "../../../generated/prisma/client";
export declare const UserService: {
    createUser: (payload: Prisma.UserCreateInput) => Promise<User>;
    getAllFromDB: () => Promise<{
        email: string;
        id: number;
        name: string | null;
        role: import("../../../generated/prisma/enums").Role;
        phone: string | null;
        picture: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
        createdAt: Date;
        updatedAt: Date;
        posts: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            thumbnail: string | null;
            isFeatured: boolean;
            tags: string[];
            views: number;
            authorId: number;
        }[];
    }[]>;
    getUserById: (id: number) => Promise<{
        email: string;
        id: number;
        name: string | null;
        role: import("../../../generated/prisma/enums").Role;
        phone: string | null;
        picture: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
        createdAt: Date;
        updatedAt: Date;
        posts: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            thumbnail: string | null;
            isFeatured: boolean;
            tags: string[];
            views: number;
            authorId: number;
        }[];
    } | null>;
    updateUser: (id: number, payload: Partial<User>) => Promise<{
        email: string;
        password: string | null;
        id: number;
        name: string | null;
        role: import("../../../generated/prisma/enums").Role;
        phone: string | null;
        picture: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser: (id: number) => Promise<{
        email: string;
        password: string | null;
        id: number;
        name: string | null;
        role: import("../../../generated/prisma/enums").Role;
        phone: string | null;
        picture: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map