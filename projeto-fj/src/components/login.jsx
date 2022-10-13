import index from '../../pages/index.jsx'
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

    const fim = (async () => {
        const a = await fazPedido("/api/contas/login", "POST", info)
        console.log(a)
        if (a.status === 200)
            router.push("/perfil")
    })

    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.ai}>

                <div className={styles.form}>
                    <img src='/images/FastJob.png' width={290} height={180}></img>
                    <form onSubmit={(e) => e.preventDefault(fim())}>

                        <input onChange={(e) => setEmail(e.target.value)} value={email} className={styles.input} type={"email"} placeholder={"Email"} />
                        <p><input onChange={(e) => setPassword(e.target.value)} value={password} className={styles.input} type={"password"} placeholder={"Password"} /></p>
                        <a href="#">Esqueceu sua senha?</a>
                        <p><button className={styles.button2}>Login</button></p>
                    </form>
                </div>
                <div className={styles.div2}>
                    <p>Recebemos mais de 100 novos utilizadores por dia.</p>
                    <p>Junte-se a eles e confira o porquê.</p>
                    <button onClick={() => router.push("/registro")} className={styles.ghost2}>Crie uma conta</button>
                </div>

            </div>
        </div>

    )
}