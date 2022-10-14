import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../../styles/SwitchBT.module.css'


export default function Switchbox() {
    const router = useRouter()
    const [toggle, setToggle] = useState();

    const triggerToggle = () => {
        console.log("TROQUEI")
        setToggle(valorAntigo => {
            console.log(!valorAntigo)
            localStorage.setItem("toggleState", !valorAntigo)
            console.log(localStorage.getItem("toggleState"))
            return !valorAntigo
        })
    }

    //Quando a componente carrega useEffect()
    useEffect(() => {
        //Ler o valor do localstorage e guardar no state
        const valorDoToggle = localStorage.getItem("toggleState") === "false" ? false : true
        console.log(valorDoToggle)
        setToggle(valorDoToggle)
    }, [])

    useEffect(() => {
        function trocaDePagina() {
            if (router.asPath !== "/perfil") {
                if (toggle === false && router.route !== "/flOfertas") {
                    console.log("VAI PARA FL OFERTAS")
                    router.push("/flOfertas")
                } else if (toggle === true && router.route !== "/ctOfertas") {
                    console.log("VAI PARA CT OFERTAS")
                    router.push("/ctOfertas")
                }
            }

        }


        setTimeout(() => {
            trocaDePagina()
        }, 100);
    }, [toggle])

    if (toggle === undefined) return null

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


