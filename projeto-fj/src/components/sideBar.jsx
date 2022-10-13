import styles from '../../styles/SideBar.module.css'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import WorkIcon from '@mui/icons-material/Work';
import Switch from '@mui/material/Switch';
import FormControlLabel from "@mui/material/FormControlLabel";
import Switchbox from './switchbotton';
import { useRouter } from 'next/router';


export default function SideBar() {
    const router = useRouter()

    return (
        <div className={styles.container}>



            <div className={styles.avatar}>


                <div className={styles.imag}>
                    <img src="https://penser.com.br/wp-content/uploads/2018/06/bom-exemplo-foto-para-linkedin.png" />
                </div>
                <h2>John D.</h2>
                <div>
                    <Switchbox />
                </div>




            </div>

            <div className={styles.menu}>
                <div className={styles.submenu}>

                    <button onClick={() => router.push("/perfil")} className={styles.button3}><PersonIcon className={styles.icons} />Perfil</button>
                </div>
                <div className={styles.submenu}>

                    <button className={styles.button3}><ChatIcon className={styles.icons} />Chat</button>
                </div>
                <div className={styles.submenu}>

                    <button onClick={() => router.push("/flOfertas")} className={styles.button3}><WorkIcon className={styles.icons} />Vagas</button>
                </div>



            </div>
            <div>




            </div>

            <button className={styles.button2}>Logout</button>





        </div>

    )
}
