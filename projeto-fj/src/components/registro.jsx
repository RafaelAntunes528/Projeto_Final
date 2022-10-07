import styles from '../../styles/Registro.module.css'

export default function Registro() {
    return (
        <div className={styles.container}>
            <div className={styles.div1}>
                <div className={styles.div2}>
                    <div>
                        <button className={styles.button1}>Voltar</button>
                    </div>

                </div>
                <div className={styles.div3}>
                    <form className={styles.form}>
                        <input type={"text"} placeholder={"nome"} />
                        <input type={"email"} placeholder={"Email"} />
                        <input type={"password"} placeholder={"Senha"} />
                        <input type={"telefone"} placeholder={"Telefone"} />
                        <input type={"morada"} placeholder={"Morada"} />

                        <button className={styles.button}>Login</button>

                    </form>
                </div>
            </div>
        </div>




    )
}