import type { Post, Prisma } from "../../../generated/prisma/client";
export declare const PostService: {
    createPost: (payload: Prisma.PostCreateInput) => Promise<Post>;
    getAllPosts: ({ page, limit, search, isFeatured, tags }: {
        page?: number;
        limit?: number;
        search?: string;
        isFeatured?: boolean;
        tags?: string[];
    }) => Promise<{
        data: ({
            author: {
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
            };
        } & {
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
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getPostById: (id: number) => Promise<({
        author: {
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
        };
    } & {
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
    }) | null>;
    updatePost: (id: number, data: Partial<any>) => Promise<{
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
    }>;
    deletePost: (id: number) => Promise<{
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
    }>;
    getBlogStat: () => Promise<{
        stats: {
            totalPosts: number;
            totalViews: number;
            avgViews: number;
            minViews: number;
            maxViews: number;
        };
        featured: {
            count: number;
            topPost: {
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
            } | null;
        };
        lastWeekPostCount: number;
    }>;
};
//# sourceMappingURL=post.service.d.ts.map