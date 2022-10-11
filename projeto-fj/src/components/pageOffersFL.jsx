import SideBar from "./sideBar";
import styles from '../../styles/pageOffersFL.module.css'
export default function OffersFL (){
    return(
        <div className={styles.mae}>
            <div classname={styles.side}>
                <SideBar></SideBar> 
            </div>
            <div className={styles.main}>
                <h1>TESTE</h1>
            </div>
        </div>
    )
}