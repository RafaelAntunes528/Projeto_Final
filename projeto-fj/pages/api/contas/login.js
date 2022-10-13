import { getUserByEmail } from "../../../src/data/paperwork"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    console.log("Recebi")
    if (req.method === "POST") {
        console.log("Post")

        const { email, password } = req.body;

        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(404).json({
            message: "O utilizador não foi encontrado!",
            });
        }
        if (user.password !== password) {
            return res.status(401).json({
            message: "A password introduzida é inválida!",
            });
        }
        
        res.status(200).json({message: "Funciona"})
        console.log("RES")
    }else {
        console.log("ok")
        return res.status(404).json({message: "Utilizador não encontrado"})
    }

}