"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Body from './components/body'
import Header from './components/header';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Body/>
    </main>
  )
}
