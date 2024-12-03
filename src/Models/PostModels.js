import conectarAoBanco from "../config/DbConfig.js";
import { ObjectId } from "mongodb";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("taviodb");
    const colecao = db.collection("posts_1");
    return colecao.find().toArray();
};

export async function criarPosts(novoPost) {
    const db = conexao.db("taviodb");
    const colecao = db.collection("posts_1");
    return colecao.insertOne(novoPost);
};

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("taviodb");
    const colecao = db.collection("posts_1");
    const objID = ObjectId.createFromHexString(id); 
    return colecao.updateOne({ _id: new ObjectId (objID) }, { $set: novoPost });
};