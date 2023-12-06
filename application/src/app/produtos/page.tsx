"use client";
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from '../page.module.css';
import { Product } from "@prisma/client";



export default function Produtos(){
    const [visivel, setVisivel] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [collectionFilters, setCollectionFilters] = useState<string[]>([]);
    const [categoriesFilters, setCategoriesFilters] = useState<string[]>([]);

    const handleClick = () => {
        setVisivel(!visivel);
    }

    // pega todos os produtos do banco de dados
    const fetchProducts = async () => {
        // terminar
    }

    // altera ambiente do site de acordo com o que é digitado na barra de pesquisa
    const onSearchHandler = async (name: string | undefined) => {
        if (!name) {
        setNotFound(false);
        return fetchProducts();
        }

        setNotFound(false);

        // verifica se o que está digitado é igual o nome de algum produto
        const result = products.filter((product) => {
        return product.name.toLowerCase().includes(name.toLowerCase());
        });

        if (result.length === 0) {
        setNotFound(true);
        } else {
        setProducts(result);
        }
    };

    // detecta digitação na barra de pesquisa
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);

        // se a barra estiver vazia
        if(e.target.value.length === 0) {
            onSearchHandler(undefined);
        }

        // devolve as palavras q tão sendo digitadas
        onSearchHandler(e.target.value);
    }

    // salva os filtros selecionados pelo clique
    const handleCategoriesChange = (value: string) => {
        // Verifique se o valor já está na lista. Se sim, desmarca a checkbox.
        if (categoriesFilters.includes(value)) {
          setCategoriesFilters((prev) => prev.filter((item) => item !== value));
        } else {
          setCategoriesFilters((prev) => [...prev, value]);
        }
    };

    const handleCollectionChange = (value: string) => {
        // Verifique se o valor já está na lista. Se sim, desmarca a checkbox.
        if (collectionFilters.includes(value)) {
          setCollectionFilters((prev) => prev.filter((item) => item !== value));
        } else {
          setCollectionFilters((prev) => [...prev, value]);
        }
    };

    const resetFilters = () =>{
        setCategoriesFilters([]);
        setCollectionFilters([]);
    }

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
                        <div className={styles.filtro} onClick={() => handleClick()} style={{cursor:'pointer'}}>
                            Filtros
                            <img src="\icons\filter_list.svg" alt="" />
                        </div>
                        {visivel && (
                            <div className={styles.invprod}>
                                <div className={styles.invprodcat}><strong>Categorias</strong> 
                                    <div>
                                        <input type="checkbox" value={"Camisetas"}  checked={categoriesFilters.includes("Camisetas")} onChange={() => handleCategoriesChange("Camisetas")} /> 
                                        Camisetas
                                    </div>
                                    <div>
                                        <input type="checkbox" value={"Acessórios"} checked={categoriesFilters.includes("Acessórios")} onChange={() => handleCategoriesChange("Acessórios")} />
                                        Acessórios
                                    </div>
                                    <div>
                                        <input type="checkbox" value={"Calças"} checked={categoriesFilters.includes("Calças")} onChange={() => handleCategoriesChange("Calças")} />
                                        Calças
                                    </div>
                                    <div>
                                        <input type="checkbox" value={"Casacos"} checked={categoriesFilters.includes("Casacos")} onChange={() => handleCategoriesChange("Casacos")} />
                                        Casacos
                                    </div>
                                    <div>
                                        <input type="checkbox" value={"Feminino"} checked={categoriesFilters.includes("Feminino")} onChange={() => handleCategoriesChange("Feminino")} />
                                        Feminino
                                    </div>
                                    <div>
                                        <input type="checkbox" value={"Masculino"} checked={categoriesFilters.includes("Masculino")} onChange={() => handleCategoriesChange("Masculino")} />
                                        Masculino
                                    </div>
                                </div>
                                <div className={styles.invprodcole}>
                                    <strong>Coleções</strong>
                                    <div>
                                        <input type="checkbox" value={"Keith Haring & Bvlck"} checked={collectionFilters.includes("Keith Haring & Bvlck")} onChange={() => handleCollectionChange("Keith Haring & Bvlck")} />
                                        Keith Haring & Bvlck
                                    </div>
                                    <div>
                                        <input type="checkbox" value={"Fortnite & Blvck"} checked={collectionFilters.includes("Fortnite & Blvck")} onChange={() => handleCollectionChange("Fortnite & Blvck")} />
                                        Fortnite & Blvck
                                    </div>
                                    <div>
                                        <input type="checkbox" value={"Mohair"} checked={collectionFilters.includes("Mohair")} onChange={() => handleCollectionChange("Mohair")} />
                                        Mohair
                                    </div>
                                    <div>
                                        <input type="checkbox" value={"Camisetas"} checked={collectionFilters.includes("Camisetas")} onChange={() => handleCollectionChange("Camisetas")} />
                                        Camisetas
                                    </div>
                                    <div>
                                        <input type="checkbox" value={"Whte"} checked={collectionFilters.includes("Whte")} onChange={() => handleCollectionChange("Whte")} />
                                        Whte
                                    </div>
                                </div>
                                <button onClick={() => resetFilters()}>Limpar filtros</button>
                            </div>
                        )}

                        {/* TAGS */}
                        <div className={styles.tagsprod}>
                            {/* CATEGORIAS */}
                          {categoriesFilters.map((filter) => {
                                return (
                                    <div className={styles.tagprod}>
                                        {filter} x
                                        <button onClick={() => handleCategoriesChange(filter)}> x </button>
                                    </div>
                                );
                            })}  

                            {/* COLEÇÕES */}
                          {collectionFilters.map((collection) => {
                                return (
                                    <div className={styles.tagprod}>
                                        {collection} x
                                        <button onClick={() => handleCategoriesChange(collection)}> x </button>
                                    </div>
                                );
                            })} 
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
                    <div className={styles.numeracaoPagProd}>
                    {'<'}<div className={styles.num}>1</div>{'>'}
                    </div>
                </div>

            </section>

        <Footer/>
        </>
        
    )
}