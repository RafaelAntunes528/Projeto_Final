import { getOferta, insertOferta } from "../../../src/data/paperwork"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    console.log("Recebi")
    if (req.method === "POST") {
        console.log("Post")
        await insertOferta(req.body)
        res.status(200).json({mensagem: "Funcionou"})
        console.log("RES")
    }else if(req.method === "GET") {
        console.log("Get")
        await getOferta(req.body.id)
        res.status(200).json({mensagem: "Funcionou"})
        console.log("RES")
    }else {
        console.log("ok")
        return res.status(404).json({mensagem: "Nao deu certo"})
    }

}