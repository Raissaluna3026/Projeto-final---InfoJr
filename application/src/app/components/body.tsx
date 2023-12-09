/* eslint-disable @next/next/no-css-tags */
"use client";
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from '../page.module.css';
import Bodyy from '../produto/page';
import { Product } from '@prisma/client';
import { useState, useEffect } from 'react';




export default function Body(){
    const [products, setProducts] = useState<Product[]>([]); // lista de produtos que estarão visíveis na tela

    // pega todos os produtos do banco de dados
    const fetchProducts = async () => {
        try {
            const res = await fetch("../api/v1/product/all");

            if (!res.ok) {
                throw new Error('Erro ao buscar produtos');
            }
            
            const data: Product[] = await res.json();
            
            setProducts(data);
          } catch (error) {
            console.log('fetch error: ', error);
        }
    }

    // decodifica o campo size 
    function decodeStringToObj(inputString: string): { [key: string]: number } {
        const obj: { [key: string]: number } = {};
      
        // Divide a string em pares chave-valor separados por vírgula
        const pairs = inputString.split(',');
      
        // Itera sobre cada par chave-valor e adiciona ao objeto
        pairs.forEach((pair) => {
          const [key, value] = pair.split(':');
          const trimmedKey = key.trim();
          const parsedValue = parseInt(value.trim(), 10);
      
          // Verifica se o valor é um número válido antes de adicionar ao objeto
          if (!isNaN(parsedValue)) {
            obj[trimmedKey] = parsedValue;
          }
        });
      
        return obj;
    }

    // retorna quantidade de estoque de um produto (somando quantidades de tamanhos diferentes)
    const getAvailableUnits = (product: Product) => {
        const sizeQuantity = decodeStringToObj(product.size);
        let sum = 0;

        for (const key in sizeQuantity){
            sum += sizeQuantity[key];
        }

        return sum;
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);

    return(
        <div className={styles.homepage}>
            <div className={styles.div1}>
                <h1><span className={styles.spana}>Keith Haring</span> & <span className={styles.spana} >Blvck</span> <br/> Uma Fusão de Arte e Moda</h1>
                <button>Conheça a coleção</button>
                <div className={styles.container}>
                    <img src="\images\mainBanner.png" alt="" />
                </div>
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
            
            {/* PRODUTOS */}
            <div className={styles.div1}>
                <h2 className={styles.spana}> Produtos </h2>
                <div className={styles.gridprodutos}>
                {products.map((product, index) => {
                    return(
                        <div className={styles.produto} key={index}>
                            <img src={product.images[0]} alt="BD"  />
                            <div className={styles.txtproduto}>
                                <h3>{product.name}</h3>
                                <p>R$ {product.discountPrice.toFixed(2).replace('.', ',')}<span> <del>R$ {product.totalPrice.toFixed(2).replace('.', ',')}</del></span></p>
                                <p><span>{getAvailableUnits(product)} Itens em estoque</span></p>
                            </div>
                        </div>
                    )
                })}

                    <div className={styles.produto}>
                        <img src="\images\imgfemhome.png" alt="BD"  /> {/* BANCO DE DADOS */}
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3> {/* BANCO DE DADOS */}
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p> {/* BANCO DE DADOS */}
                            <p><span>X Itens em estoque</span></p> {/* BANCO DE DADOS */}
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfemhome.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <Link href='/produto' style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
                                <h3>Blvck Mohair Branded Sweater</h3>
                            </Link>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p> 
                            <p><span>X Itens em estoque</span></p> 
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfemhome.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfemhome.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfemhome.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgfemhome.png" alt="BD"  />
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