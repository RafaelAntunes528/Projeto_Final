import styles from '../../styles/Registro.module.css'

export default function Registro() {
    return (
        <div className={styles.container}> 
            <div className={styles.ai}>  
                <div className={styles.div2}>
                    <button className={styles.button1}>Voltar</button>
                </div>
                <div>
                    
                    <form className={styles.form}>
                        <h2 className={styles.text}>Crie aqui a sua conta</h2>
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