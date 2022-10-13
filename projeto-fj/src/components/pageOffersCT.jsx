import styles from "../../styles/PageOffersCT.module.css"
import SideBar from "./sideBar"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { PopUp } from "./popUp";

export default function PageOffers() {

    let isPopup = false


    return (

        <div>
            <div>
                <SideBar></SideBar>
            </div>
            <div className={styles.main}>
                <div className={styles.q1}>
                    <div className={styles.q2}>
                        <p className={styles.title1}>Pesquisar por ofertas</p>
                        <div onClick={(e) => isPopup = true} className={styles.icone}>
                            <AddCircleOutlineIcon />
                        </div>

                    </div>
                    <div className={styles.q3}>
                        <p className={styles.title2}>Não tem propostas de trabalho publicadas</p>
                        <p>Clique no botão <AddCircleOutlineIcon /> para criar uma oferta de trabalho!</p>
                    </div>


                </div>
            </div>
             {isPopup === true ? 
             
             <div>
                {console.log("Deu")}
                <PopUp />
            </div>
            : console.log("Nao deu")} 
        </div>
    )




}