import styles from '../../styles/SideBar.module.css'










export default function SideBar() {


    return (
        <div className={styles.container}>



            <div className={styles.avatar}>


                <div className={styles.imag}>
                    <img src="https://penser.com.br/wp-content/uploads/2018/06/bom-exemplo-foto-para-linkedin.png" />
                </div>

                <h2>John D.</h2>
            </div>

            <div className={styles.menu}>
                <div className={styles.submenu}>
                    <button className={styles.button3}>Perfil</button>
                </div>
                <div className={styles.submenu}>
                    <button className={styles.button3}>Chat</button>
                </div>
                <div className={styles.submenu}>
                    <button className={styles.button3}>Vagas</button>
                </div>







            </div>
            <div>




            </div>

            <button className={styles.button2}>Logout</button>





        </div>

    )
}
