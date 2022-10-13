import SideBar from "./sideBar";
import styles from '../../styles/pageOffersFL.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';

export default function OffersFL() {
    return (
        <div>
            <div>
                <SideBar></SideBar>
            </div>
            <div className={styles.main}>
                <div className={styles.q1}>
                    <div className={styles.q2}>
                        <div className={styles.icone1}>
                            <SearchIcon></SearchIcon>
                        </div>
                        <p className={styles.title1}>As suas propostas de trabalho</p>
                        <div className={styles.icone}>
                            <input type={"search"}></input>
                        </div>


                    </div>
                    <div className={styles.q5}>
                        <p className={styles.filtrar}>Filtrar por:</p>
                        
                        <div className={styles.regiao}><input type="checkbox"></input>
                        
                        <label for="scales">Região</label></div>
                        <div className={styles.horario}><input type="checkbox"></input>
                        
                        <label for="scales">Horário</label></div>
                        <div className={styles.pago}><input type="checkbox"></input>
                        
                        <label for="scales">Valor pago</label></div>

                    </div>


                </div>
            </div>
        </div>
    )
}