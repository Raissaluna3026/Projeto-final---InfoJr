"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from '../page.module.css';

export default function Body(){

    return(
        <div className={styles.homepage}>
            <div className={styles.div1}>
                <h1>Keith Haring & Blvck Uma Fusão de Arte e Moda</h1>
                <button>Conheça a coleção</button>
                <img src="\images\mainBanner.png" alt="" />
            </div>
            <div className={styles.div1}>
                <h2>Conheça também</h2>
                <div className={styles.images}>
                    <div className={styles.left}>
                        <div className={styles.promo}>
                            <img src="\images\image 1.png" alt=""  className={styles.teste}/>
                            <p>Promoções</p>
                        </div>
                        <div className={styles.acess}>
                            <img src="\images\image 2.png" alt="" className={styles.teste}/>
                            <p>Acessórios</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src="\images\image 3.png" alt="" className={styles.teste} />
                        <p>Whte</p>
                    </div>
                </div>
            </div>
        </div>
    )
}