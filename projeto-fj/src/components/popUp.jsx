import styles from "../../styles/PopUp.module.css"

export function PopUp() {


    return (
        <div className={styles.main}>
            <div className={styles.q0}>
                <div className={styles.q1}>
                    <p className={styles.t1}>Criar uma proposta de trabalho</p>
                    <p className={styles.t2}>Estas serão as informações a
                        partir dasquais potenciais<br />  candidatos poderão encontrar a sua oferta.</p>
                        <div className={styles.q3}>
                    <label className={styles.servico} htmlFor="fname">Serviço pretendido</label>
                    <input type="text" id="serviço" name="serviço"></input>
                    <label className={styles.regiao} htmlFor="distritos">Região</label>
                    <select id="distritos" name="distritos">
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

                    <input type="number" id="horario" name="horario"
                        min="0" max="23"></input>:<input type="number" id="horario" name="horario" min="0" max="59"></input>
                        
                    </div>
                    
                    <label className={styles.horario} htmlFor="tentacles">Hora do Fim</label>
                    <div className={styles.q6}>

                    <input type="number" id="horario" name="horario"
                        min="0" max="23"></input>:<input type="number" id="horario" name="horario" min="0" max="59"></input>
                        
                    </div>

                    <label className={styles.preço} size="2px" htmlFor="preço">Valor a pagar</label>

                    <input type="number" id="preço" name="preço"></input>
                    
                    
                    </div>

                        <div className={styles.q2}>
                            <button className={styles.cancelar}>Cancelar</button>
                            <button className={styles.proposta}>Publicar proposta</button>
                        </div>
                </div>
            </div>
        </div>
    )
}