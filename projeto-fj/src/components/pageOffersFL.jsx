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

                        <p className={styles.title1}>As suas propostas de trabalho</p>
                        <div className={styles.icone}>
                            <input type={"search"}></input>
                            <div className={styles.icone1}>
                                <SearchIcon></SearchIcon>
                            </div>
                        </div>



                    </div>
                    <div className={styles.q5}>
                        <p className={styles.filtrar}>Filtrar por:</p>

                        <div className={styles.acertar}><input className={styles.chek} type="checkbox"></input>
                            <label for="scales">Região</label>
                        </div>
                        <div className={styles.acertar}><input className={styles.chek} type="checkbox"></input>
                            <label for="scales">Horário</label></div>
                        <div className={styles.acertar} ><input className={styles.chek} type="checkbox"></input>

                            <label for="scales">Valor</label></div>

                    </div>


                </div>
            </div>
        </div>
    )
}