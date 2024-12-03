import express from "express";

import { listarPosts, postarPost, atualizarNovoPost } from "../Controller/PostControllers.js";

const routes = (app) => {
    app.use(express.json());
    app.get("/post", listarPosts);
    app.post("/post", postarPost);
    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;