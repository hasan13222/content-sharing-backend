import express from 'express'
const router = express.Router();
import { authRoutes } from '../modules/auth/auth.route.js';
import { profileRoutes } from '../modules/profile/profile.route.js';
import { contentRoutes } from '../modules/content/content.route.js';

const moduleRouters = [
    {
        path: "/auth",
        routes: authRoutes,
    },
    {
        path: "/profile",
        routes: profileRoutes
    },
    {
        path: "/content",
        routes: contentRoutes
    }
];

moduleRouters.forEach((route) => {
    router.use(route.path, route.routes);
});

export default router