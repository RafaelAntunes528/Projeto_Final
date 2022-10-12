import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../src/components/homePage'
import Login from '../src/components/login'
import NavBar from '../src/components/navBar'
import Registro from '../src/components/registro'
import styles from '../styles/Home.module.css'
import SideBar from '../src/components/sideBar'
import PageOffers from '../src/components/pageOffersCT'
import PopUp from '../src/components/popup'
import Switchbotton from '../src/components/switchbotton'


export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar></SideBar>
    </div>
  )
}

