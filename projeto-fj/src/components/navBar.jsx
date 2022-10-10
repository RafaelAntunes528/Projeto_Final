import styles from '../../styles/NavBar.module.css'
export default function NavBar() {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>

            </div>

            <button className={styles.registro}>REGISTRE-SE</button>
            <button className={styles.login}>LOGIN</button>

        </div>
    )
}