import conectarAoBanco from "../config/DbConfig.js";
import { ObjectId } from "mongodb";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("");
    const colecao = db.collection("");
    return colecao.find().toArray();
};

export async function criarPosts(novoPost) {
    const db = conexao.db("");
    const colecao = db.collection("");
    return colecao.insertOne(novoPost);
};

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("");
    const colecao = db.collection("");
    const objID = ObjectId.createFromHexString(id); 
    return colecao.updateOne({ _id: new ObjectId (objID) }, { $set: novoPost });
};