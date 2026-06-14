export declare const Role: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly ADMIN: "ADMIN";
    readonly USER: "USER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly BLOCK: "BLOCK";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
//# sourceMappingURL=enums.d.ts.map