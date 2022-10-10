import index from '../../pages/index.jsx'
import { useRouter } from "next/router"
import styles from '../../styles/Login.module.css'
import { useState } from 'react'
import { fazPedido } from '../Utils/rest.js'
export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let info = {
        "email": email,
        "password": password
    }

    const fim = ( async() => {
        const a = await fazPedido("/api/contas/login", "POST", info)
         console.log(a)
         router.push("/homePage")
    })

    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.ai}>

                <div className={styles.form}>
                    <form onSubmit={(e) => e.preventDefault(fim())}>

                        <input onChange={(e)=> setEmail(e.target.value)} value={email} className={styles.input} type={"email"} placeholder={"Email"} />
                        <p><input onChange={(e)=> setPassword(e.target.value)} value={password} className={styles.input} type={"password"} placeholder={"Password"} /></p>
                        <a href="#">Esqueceu sua senha?</a>
                        <p><button className={styles.button2}>Login</button></p>
                    </form>
                </div>
                <div className={styles.div2}>
                    <h1>Fast Job</h1>
                    <p>Aqui começa sua jornada, ofereça vagas ou encontre vagas para você</p>
                    <button onClick={() => router.push("/registro")} className={styles.ghost2}>Registrar</button>
                </div>

            </div>
        </div>

    )
}