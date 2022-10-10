import styles from '../../styles/HomePage.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

/* async function lerHistorico() {
    return await fazPedido(
        "/api/calculadora",
        "GET"
    )
}

export function Calculadora() {
    // fazSoma(3, 8).then(e => console.log(e))
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [historico, setHistorico] = useState([])

    async function atualizaHistorico() {
        const resposta = await lerHistorico()
        setHistorico(resposta)
    }
    useEffect(() => {
        atualizaHistorico()
    }, []) */

export default function HomePage() {

    const router = useRouter()

    return (
        <div className={styles.HomePage}>
            <div className={styles.main}>
                <Image className={styles.image} src="/images/FastJob.png" alt="logo" width={240} height={150}></Image>


                <button onClick={()=> router.push("/registro")} className={styles.registro}>REGISTRE-SE</button>
                <button onClick={()=> router.push("/login")} className={styles.login}>LOGIN</button>

            </div>
            <div className={styles.qq}>
                <div className={styles.q1}>
                    <div className={styles.qitem}>
                        <h1 className={styles.pt}>Procuro contratar</h1>
                    </div>
                    <div className={styles.qitem2}>
                        <h1 className={styles.pt2}>Temos 1 383 092 freelancers à sua espera.</h1>
                        <button onClick={() => router.push("/ctOfertas")} className={styles.buto}>Confira por si</button>
                    </div>

                </div>
                <div className={styles.linhaVertical} />
                <div className={styles.q1}>
                    <div className={styles.qitem3}>
                        <h1 className={styles.pt}>Procuro trabalho</h1>
                    </div>
                    <div className={styles.qitem4}>
                        <h1 className={styles.pt2}>Tem 8 722 oportunidades de trabalho à sua disposição.</h1>
                        <button onClick={() => router.push("/flOfertas")} className={styles.buto}>Confira por si</button>
                    </div>
                </div>

            </div>
        </div>





    )
}