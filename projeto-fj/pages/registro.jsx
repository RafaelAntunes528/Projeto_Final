import Head from 'next/head'
import Image from 'next/image'
import Login from '../src/components/login'
import Registro from '../src/components/registro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Registro></Registro>
    </div>
  )
}