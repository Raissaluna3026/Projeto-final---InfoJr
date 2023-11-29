"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Body from './components/body'
import Header from './components/header';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Body/>
      <Footer/>
    </main>
  )
}
