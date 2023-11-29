"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from '../page.module.css';

export default function Body(){

    return(
        <div className={styles.homepage}>
            <div className={styles.div1}>
                <h1><span className={styles.spana}>Keith Haring</span> & <span className={styles.spana} >Blvck</span> <br/> Uma Fusão de Arte e Moda</h1>
                <button>Conheça a coleção</button>
                <img src="\images\mainBanner.png" alt="" />
            </div>
            <div className={styles.div1}>
                <h2 className={styles.spana}>Conheça também</h2>
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
            <div className={styles.div1}>
                <h2 className={styles.spana}> Produtos </h2>
                <div className={styles.gridprodutos}>
                    <div className={styles.produto}>
                        <img src="\images\image prod.png" alt="BD"  /> {/* BANCO DE DADOS */}
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3> {/* BANCO DE DADOS */}
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p> {/* BANCO DE DADOS */}
                            <p><span>X Itens em estoque</span></p> {/* BANCO DE DADOS */}
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\image prod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3> 
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p> 
                            <p><span>X Itens em estoque</span></p> 
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\image prod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\image prod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\image prod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\image prod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                </div>
                <button>Ver mais</button>
            </div>
        </div>
    )
}