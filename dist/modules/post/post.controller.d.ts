import type { Request, Response } from "express";
export declare const PostController: {
    createPost: (req: Request, res: Response) => Promise<void>;
    getAllPosts: (req: Request, res: Response) => Promise<void>;
    getPostById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updatePost: (req: Request, res: Response) => Promise<void>;
    deletePost: (req: Request, res: Response) => Promise<void>;
    getBlogStat: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=post.controller.d.ts.map