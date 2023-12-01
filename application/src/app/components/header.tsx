"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';

export default function Header(){

    const [visivel, setVisivel] = useState(false);

    const handleClick = () => {
        setVisivel(!visivel);
        setVisivel2(false)
    }
    const [visivel2, setVisivel2] = useState(false);

    const handleClick2 = () => {
        setVisivel2(!visivel2);
        setVisivel(false)
    }

    return(
        <>
            <div className={styles.header} onMouseLeave={() => {handleClick(), handleClick2()}}>
                <div className={styles.black}>  
                    <h1>BLVCK</h1>
                </div>
                <div className={styles.divmeio} >
                    <div className={styles.divprodutos}  >
                        <Link href="/produtos" onMouseEnter={() => handleClick()}>Produtos</Link>
                        {visivel && (
                            <div className={styles.opcprodutos}>
                                <p>Camisas</p>
                                <p>Calças</p>
                                <p>Casacos</p>
                                <p>Acessórios</p>
                                <p>Masculino</p>
                                <p>Feminino</p>
                            </div>
                        )}
                    </div>
                    <div className={styles.divcolec}>
                        <a href="#" onMouseEnter={() => handleClick2()}>Coleções</a>
                        {visivel2 && (
                            <div className={styles.opcolec}>
                                <p>Keith Haring & Blvck</p>
                                <p>Fortnite & Blvck</p>
                                <p>Shorts</p>
                                <p>Whte</p>
                            </div>
                        )}
                    </div>
                    <a href="#">Sobre</a>
                </div>
                <div className={styles.divicons}>
                    <a href="#"> <img src="\icons\shopping_cart.svg" alt="shopping" /></a>
                    <a href="#"><img src="\icons\favorite_border.svg" alt="fav" /></a>
                    <a href="#"><img src="\icons\person_outline.svg" alt="person" /></a>
                </div>
            </div>
        </>
    )
}
