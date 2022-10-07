import { insertConta } from "../../../src/data/paperwork"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    if (req.method === "GET") {
        res.status(201)
    } if (req.method === "Post") {
        await insertConta(req.body)
        res.status(200)
    }else {
        return res.status(404)
    }

}