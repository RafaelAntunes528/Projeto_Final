import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../src/components/homePage'
import Login from '../src/components/login'
import NavBar from '../src/components/navBar'
import Registro from '../src/components/registro'
import styles from '../styles/Home.module.css'
import SideBar from '../src/components/sideBar'
import PageOffers from '../src/components/pageOffersCT'


export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <PageOffers></PageOffers>
=======
      <Login></Login>
>>>>>>> d4a7fce37ae2815ceaa25f4083641435cb3aada0
    </div>
  )
}
