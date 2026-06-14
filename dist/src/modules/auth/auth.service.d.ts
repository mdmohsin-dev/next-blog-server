export declare const AuthService: {
    loginWithEmailAndPassword: ({ email, password }: {
        email: string;
        password: string;
    }) => Promise<{
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
    authWithGoogle: (data: {
        email: string;
        name?: string;
        picture?: string;
    }) => Promise<{
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
//# sourceMappingURL=auth.service.d.ts.map