// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    if (req.method === "GET") {
        res.status(200)
    } if (req.method === "Post") {
        res.status(200)
    }else {
        return res.status(404)
    }

}