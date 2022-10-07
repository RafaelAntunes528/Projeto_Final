import styles from '../../styles/Registro.module.css'
import { useRouter } from "next/router"
export default function Registro() {
    const router = useRouter()
    return (
        <div className={styles.container}> 
            <div className={styles.ai}>  
                <div className={styles.div2}>
                    <button onClick={() => router.push("/login")} className={styles.button1}>Voltar</button>
                </div>
                <div>
                    
                    <form className={styles.form}>
                        <h2 className={styles.text}>Crie aqui a sua conta</h2>
                        <input className={styles.input1} type={"text"} placeholder={"nome"} />
                        <input className={styles.input1} type={"email"} placeholder={"Email"} />
                        <input className={styles.input1} type={"password"} placeholder={"Senha"} />
                        <input className={styles.input1} type={"telefone"} placeholder={"Telefone"} />
                        <input className={styles.input1} type={"morada"} placeholder={"Morada"} />

                        <button className={styles.button}>Login</button>

                    </form>
                </div>
            </div> 
        </div>




    )
}