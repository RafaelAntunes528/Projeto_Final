import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../../styles/PopUp.module.css"
import { fazPedido } from "../Utils/rest"

export function PopUp() {

    const router = useRouter()

    const [servicos, setServicos] = useState("")
    const [regiao, setRegiao] = useState("")
    const [hi, setHi] = useState("")
    const [mi, setMi] = useState("")
    const [hf, setHf] = useState("")
    const [mf, setMf] = useState("")
    const [valor, setValor] = useState("")

    const info = {
        serviço: servicos,
        regiao: regiao,
        horaInico: hi + mi,
        horaFim: hf + mf,
        valor: valor
    }


    const fim = (async () => {
        console.log(info)
        const a = await fazPedido("/api/Ofertas/", "POST", info)
        console.log(a)
        if (a.status === 200)
            router.push("/ctOfertas")
    })


    return (
        <div className={styles.main}>
            <div className={styles.q0}>
                <form onSubmit={(e) => e.preventDefault(fim())}>
                    <div className={styles.q1}>

                        <p className={styles.t1}>Criar uma proposta de trabalho</p>

                        <p className={styles.t2}>Estas serão as informações a
                            partir dasquais potenciais<br />  candidatos poderão encontrar a sua oferta.</p>

                        <div className={styles.q3}>

                            <label className={styles.servico} htmlFor="fname">Serviço pretendido</label>

                            <input onChange={(e) => setServicos(e.target.value)} value={servicos} type="text" id="serviço" name="serviço"></input>

                            <label className={styles.regiao} htmlFor="distritos">Região</label>

                            <select onChange={(e) => setRegiao(e.target.value)} value={regiao} id="distritos" name="distritos">
                                <option value="Aveiro">Aveiro</option>
                                <option value="Beja">Beja</option>
                                <option value="Braga">Braga</option>
                                <option value="Bragança">Bragança</option>
                                <option value="Castelo Branco">Castelo Branco</option>
                                <option value="Coimbra">Coimbra</option>
                                <option value="Évora">Évora</option>
                                <option value="Faro">Faro</option>
                                <option value="Guarda">Guarda</option>
                                <option value="Leiria">Leiria</option>
                                <option value="Lisboa">Lisboa</option>
                                <option value="Portalegre">Portalegre</option>
                                <option value="Porto">Porto</option>
                                <option value="Santarém">Santarém</option>
                                <option value="Setúbal">Setúbal</option>
                                <option value="Viana fo Castelo">Viana do Castelo</option>
                                <option value="Vila Real">Vila Real</option>
                                <option value="Viseu">Viseu</option>
                            </select>


                            <label className={styles.horario} htmlFor="tentacles">Hora de Inicio</label>
                            <div className={styles.q5}>

                                <input onChange={(e) => setHi(e.target.value)} value={hi} type="number" id="horario" name="horario"
                                    min="0" max="23"></input>:<input onChange={(e) => setMi(e.target.value)} value={mi} type="number" id="horario" name="horario" min="0" max="59"></input>

                            </div>

                            <label className={styles.horario} htmlFor="tentacles">Hora do Fim</label>
                            <div className={styles.q6}>

                                <input onChange={(e) => setHf(e.target.value)} value={hf} type="number" id="horario" name="horario"
                                    min="0" max="23"></input>:<input onChange={(e) => setMf(e.target.value)} value={mf} type="number" id="horario" name="horario" min="0" max="59"></input>

                            </div>

                            <label className={styles.preço} size="2px" htmlFor="preço">Valor a pagar</label>

                            <input onChange={(e) => setValor(e.target.value)} value={valor} type="number" id="preço" name="preço" min="0"></input>


                        </div>

                        <div className={styles.q2}>
                            <button onClick={() => window.location.reload()} type={"reset"} className={styles.cancelar}>Cancelar</button>
                            <button type={"submit"} className={styles.proposta}>Publicar proposta</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}