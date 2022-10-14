import styles from "../../styles/PageOffersCT.module.css"
import SideBar from "./sideBar"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { PopUp } from "./popUp";
import { useState } from "react";
import { style } from "@mui/system";

export default function PageOffers() {

    const [isPopup, setIspopup] = useState(false)


    return (

        <div>
            <div>
                <SideBar></SideBar>
            </div>
            <div className={styles.main}>
                <div className={styles.q1}>
                    <div className={styles.q2}>
                        <p className={styles.title1}>Pesquisar por ofertas</p>
                        <div onClick={() => setIspopup(true)} className={styles.icone}>
                            <AddCircleOutlineIcon />
                        </div>

                    </div>
                    <div className={styles.q3}>
                        <p className={styles.title2}>Não tem propostas de trabalho publicadas</p>
                        <p>Clique no botão <AddCircleOutlineIcon /> para criar uma oferta de trabalho!</p>
                    </div>


                </div>
            </div>
            {isPopup ?

                <div className={styles.pop}>
                    {console.log("Deu")}
                    <PopUp />
                </div>
                : console.log("Nao deu")}

        </div>
    )




}