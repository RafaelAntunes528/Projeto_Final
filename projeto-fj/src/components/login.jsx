import index from '../../pages/index.jsx'
import { useRouter } from "next/router"
import styles from '../../styles/Login.module.css'
export default function Login() {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.ai}>

                <div className={styles.form}>
                    <form action="#">

                        <input className={styles.input} type={"email"} placeholder={"Email"} />
                        <p><input className={styles.input} type={"password"} placeholder={"Password"} /></p>
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