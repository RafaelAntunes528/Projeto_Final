import SideBar from "./sideBar";
import styles from '../../styles/pageOffersFL.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function OffersFL (){
    return(
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
                        </div>

                    </div>
                    <div className={styles.q4}>
                    </div>

                    
                    <div className={styles.q3}>
                    </div>


                </div>
            </div>
        </div>
    )
}