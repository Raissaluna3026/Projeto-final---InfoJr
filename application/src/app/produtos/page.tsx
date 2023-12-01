/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
import Footer from "../components/footer";
import Header from "../components/header";
import styles from '../page.module.css';


export default function Produtos(){
    return(
        <>
        <Header/>
            <section className={styles.homepage}>            
                <div className={styles.div1}>
                <h2 className={styles.spana}> Produtos </h2>
                <div className={styles.filtragem}>
                    <div className={styles.pesquisaprod}>
                        <div className={styles.inptprod}>
                            <input type="text"  placeholder="Pesquisar"/>
                            <img src="\icons\search.svg" alt="" />
                        </div>
                        <p>23 Itens encontrados!</p>
                    </div>
                    <div className={styles.filtros}>
                        <div className={styles.filtro}>
                            Filtros
                            <img src="\icons\filter_list.svg" alt="" />
                        </div>
                        <div className={styles.invprod}>
                            
                        </div>
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
                <div className={styles.gridprodutos}>
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
                </div>
            </section>
        <Footer/>
        </>
        
    )
}