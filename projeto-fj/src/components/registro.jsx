import styles from '../../styles/Registro.module.css'
import { useRouter } from "next/router"
import { useState } from 'react'
import { fazPedido } from '../Utils/rest'
export default function Registro() {
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [morada, setMorada] = useState("")
    const [telemovel, setTelemovel] = useState("")
    const router = useRouter()

    let contas={"nome": nome,
            "email": email,
            "morada": morada,
            "telemovel": telemovel,
            "password": password
        }

    const fim = ( async() => {
       const a = await fazPedido("/api/contas", "POST", contas)
        console.log(a)
        router.push("/login")
    })

    return (
        <div className={styles.container}> 
            <div className={styles.ai}>  
                <div className={styles.div2}>
                    <button onClick={() => router.push("/login")} className={styles.button1}>Voltar</button>
                </div>
                <div>
                    
                    <form onSubmit={(e) => e.preventDefault(fim())} className={styles.form}>
                        <h2 className={styles.text}>Crie aqui a sua conta</h2>
                        <input onChange={(e)=> setNome(e.target.value)} value={nome} className={styles.input1} type={"text"} placeholder={"nome"} />
                        <input onChange={(e)=> setEmail(e.target.value)} value={email} className={styles.input1} type={"email"} placeholder={"Email"} />
                        <input onChange={(e)=> setPassword(e.target.value)} value={password} className={styles.input1} type={"password"} placeholder={"Senha"} />
                        <input onChange={(e)=> setTelemovel(e.target.value)} value={telemovel} className={styles.input1} type={"text"} placeholder={"Telefone"} />
                        <input onChange={(e)=> setMorada(e.target.value)} value={morada} className={styles.input1} type={"text"} placeholder={"Morada"} />

                        <button className={styles.button}>Login</button>

                    </form>
                </div>
            </div> 
        </div>




    )
}