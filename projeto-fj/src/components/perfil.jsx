import styles from "../../styles/Perfil.module.css"
import SideBar from "./sideBar"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Perfil() {
    return (

        <div>
            <SideBar></SideBar>

            <div className={styles.main}>
                <div className={styles.q1}>
                    <div className={styles.q2}>
                        <h1 className={styles.editar}>Perfil</h1>
                    </div>
                    <div className={styles.q3}>
                        <AccountCircleIcon className={styles.icone2}></AccountCircleIcon>
                        <button className={styles.button1}>Mudar foto de perfil</button>
                        <input className={styles.input1} type="tel" placeholder="Telemóvel"></input>
                        <input className={styles.input2} type="tel" placeholder="Email"></input>
                        <div className={styles.q4}>
                            <button className={styles.button2}>Cancelar</button>
                            <button className={styles.button3}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}