import { ObjectId } from "mongodb"
// Buscamos a função que faz a conecção com a base de dados
import { getMongoCollection } from "./mongodb"


//Defenimos o nome da base de dados e o nome da celeção
const DB_NAME = "Projeto-Final"
const COLLECTION_NAME = "Contas"



// Introduz uma conta a coleção
async function insertConta(op) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.insertOne(op)
}
async function getUserByEmail(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
    const result = await collection.findOne({ email });
    return result;
  }

// Exportamos as duas funções criadas acima
export {
    getUserByEmail,
    insertConta,
}