import { criarPosts, getTodosPosts, atualizarPost } from "../Models/PostModels.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarPost(req, res) {
    const novoPost = req.body;
    try{  
        const postCriado = await criarPosts(novoPost);
        res.status(200).json(postCriado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({"Error": "Falha na requisição"});
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const post = {
        titulo: req.body.titulo,
        descricao: req.body.descricao
    }
    try{  
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({"Error": "Falha na requisição"});
    }
}