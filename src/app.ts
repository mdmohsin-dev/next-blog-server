import compression from "compression";
import cors from "cors";
import express from "express";
import type { Express } from "express";
import { AuthRouter } from "./modules/auth/auth.route.js";
import { PostRouter } from "./modules/post/post.route.js";
import { UserRouter } from "./modules/user/user.route.js";

const app: Express = express();

app.use(
    cors({
        origin: "http://localhost:5000",
        credentials: true,
    })
);
// Middleware
app.use(compression()); // Compresses response bodies for faster delivery
app.use(express.json()); // Parse incoming JSON requests


app.use("/api/v1/user", UserRouter);
app.use("/api/v1/post", PostRouter);
app.use("/api/v1/auth", AuthRouter);

// Default route for testing
app.get("/", (_req, res) => {
    res.send("API is running");
});


// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});

export default app;