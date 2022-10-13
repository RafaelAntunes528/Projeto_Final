import { getOferta, insertOferta } from "../../../src/data/paperwork"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    console.log("Recebi")
    const { get } = req.query
    if (req.method === "GET") {
        console.log("Get")
        await getOferta(get)
        res.status(200).json({mensagem: "Funcionou o GET"})
        console.log("RES")


    }else {
        console.log("ok")
        return res.status(404).json({mensagem: "Nao deu certo"})
    }

}
