import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "Projeto-Final"
const COLLECTION_NAME = "Contas"

async function GetContaEmail() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne().toArray()
}

async function insertConta(op) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.insertOne(op)
}

export {
    GetContaEmail,
    insertConta,
}