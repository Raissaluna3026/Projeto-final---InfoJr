"use client";
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from './page.module.css';


export default function Edicao(){

    const [visivel, setVisivel] = useState(false);

    const handleClick = () => {
        setVisivel(!visivel);
    }
    return(
        <>
        <Header />
        <section className={styles.homepage}>            
                <div className={styles.div1}>
                <h2 className={styles.spana}> Edição </h2>
                <div className={styles.filtragem}>
                    <div className={styles.pesquisaprod}>
                        <div className={styles.inptbtn}>
                            <div className={styles.inptprod}>
                                <input type="text"  placeholder="Pesquisar"/>
                                <img src="\icons\search.svg" alt="" />
                            </div>
                            <div className={styles.criarprod} style={{cursor:'pointer'}}>
                                Criar produto
                                <img src="\images\imgadd.svg" alt="" />
                            </div>
                        </div>
                        <p>23 Itens encontrados!</p>
                    </div>
                    <div className={styles.filtros}>
                        <div className={styles.filtro} onClick={() => handleClick()} style={{cursor:'pointer'}}>
                            Filtros
                            <img src="\icons\filter_list.svg" alt="" />
                        </div>
                        {visivel && (
                            <div className={styles.invprod}>
                                <div className={styles.invprodcat}><strong>Categorias</strong> 
                                    <div>
                                        <input type="checkbox"/> 
                                        Camisetas
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        Acessórios
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        Calças
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        Casacos
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        Feminino
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        Masculino
                                    </div>
                                </div>
                                <div className={styles.invprodcole}>
                                    <strong>Coleções</strong>
                                    <div>
                                        <input type="checkbox" />
                                        Keith Haring & Bvlck
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        Fortnite & Blvck
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        Mohair
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        Camisetas
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        Whte
                                    </div>
                                </div>
                                <p>Limpar filtros</p>
                            </div>
                        )}
                        <div className={styles.tagsprod}>
                            <div className={styles.tagprod}>
                                Casacos x
                            </div>
                            <div className={styles.tagprod}>
                                Masculino x
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.gridprodutos2}>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfem2.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.numeracaoPagProd}>
                    {'<'}<div className={styles.num}>1</div>{'>'}
                    </div>
                </div>

            </section>
        <Footer/>
        </>
    )
}