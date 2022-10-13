import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../src/components/homePage'
import Login from '../src/components/login'
import NavBar from '../src/components/navBar'
import Registro from '../src/components/registro'
import styles from '../styles/Home.module.css'
import SideBar from '../src/components/sideBar'
import PageOffers from '../src/components/pageOffersCT'


import Switchbotton from '../src/components/switchbotton'
import OffersFL from '../src/components/pageOffersFL'
import { PopUp } from '../src/components/popUp'
import Perfil from '../src/components/perfil'


export default function Home() {
  return (
    <div>
      <SideBar></SideBar>
    </div>
  )
}

