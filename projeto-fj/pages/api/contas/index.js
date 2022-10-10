import { insertConta } from "../../../src/data/paperwork"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    console.log("Recebi")
    if (req.method === "POST") {
        console.log("Post")
        await insertConta(req.body)
        res.status(200)
        console.log("RES")
    }else {
        console.log("ok")
        return res.status(404)
    }

}