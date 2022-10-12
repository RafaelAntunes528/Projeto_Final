import { useState } from 'react';
import styles from '../../styles/SwitchBT.module.css'


export default function Switchbox() {
    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle(!toggle)

    }

    return (

        <div onClick={triggerToggle} className={`${styles.wrg_toggle} ${toggle ? styles.wrg_toggle__checked : ''}`}>
            <div className={styles.wrg_toggle_container}>
                <div className={styles.wrg_toggle_check}>
                    <span>Contratante</span>
                </div>
                <div className={styles.wrg_toggle_uncheck}>
                    <span>Freelancer</span>
                </div>
            </div>
            <div className={styles.wrg_toggle_circle}></div>
            <input checked={toggle}
                onChange={triggerToggle} className={styles.wrg_toggle_input} type="checkbox" aria-label="Toggle Button" />
        </div >


    )




}


