import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../src/components/homePage'
import Login from '../src/components/login'
import NavBar from '../src/components/navBar'
import Registro from '../src/components/registro'
import styles from '../styles/Home.module.css'
import SideBar from '../src/components/sideBar'
import PageOffers from '../src/components/pageOffersCT'
<<<<<<< HEAD
import PopUp from '../src/components/popup'
import Switchbotton from '../src/components/switchbotton'
import OffersFL from '../src/components/pageOffersFL'
=======
import {PopUp} from '../src/components/popUp'
<<<<<<< HEAD
import Perfil from '../src/components/perfil'
=======
>>>>>>> 14e68fb10dcd04d5c5bc59598f12e2988082ac89
>>>>>>> 490866c2a29a63f2cefa6398ca6c2b538bf62fcc


export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <Perfil></Perfil>
=======
<<<<<<< HEAD
      <OffersFL></OffersFL>
=======
      <PopUp/>
>>>>>>> 14e68fb10dcd04d5c5bc59598f12e2988082ac89
>>>>>>> 490866c2a29a63f2cefa6398ca6c2b538bf62fcc
    </div>
  )
}

