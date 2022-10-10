import styles from '../../styles/HomePage.module.css'

export default function HomePage(){
    return (
        <div>
        <div className={styles.main}>
        <div className={styles.logo}>
            <h2>FAST</h2>
            <h2>JOB</h2>
        </div>

        <button className={styles.registro}>REGISTRE-SE</button>
        <button className={styles.login}>LOGIN</button>

    </div>
    <div className={styles.qq}>
    <div className={styles.q1}>
        <h1 className={styles.pt}>Procuro contratar</h1>

    </div>
    <div className={styles.q2}>
        <h1 className={styles.pc}>Procuro trabalho</h1>

    </div>
    </div>
    </div>     
    )
}