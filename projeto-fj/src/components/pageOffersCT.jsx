import styles from "../../styles/PageOffersCT.module.css"
import SideBar from "./sideBar"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function PageOffers() {

    


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
                            <AddCircleOutlineIcon />
                        </div>

                    </div>
                    <div className={styles.q3}>
                        <p className={styles.title2}>Não tem propostas de trabalho publicadas</p>
                        <p>Clique no botão <AddCircleOutlineIcon /> para criar uma oferta de trabalho!</p>
                    </div>


                </div>
            </div>
        </div>
    )




}