/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from './page.module.css';
import { useState } from 'react';
import { Product } from '@prisma/client';

export default function Bodyy(){
    const [product, setProduct] = useState<Product>();

    // buscar dados do produto no banco de dados
    const fetchProduct = async (id: number) => {
        try {
            const res = await fetch(`../api/v1/product/get?id=${id}`);

            if (!res.ok) {
                throw new Error('Erro ao buscar produto');
            }
            
            const data: Product = await res.json();

            setProduct(data);
          } catch (error) {
            console.log('fetch error: ', error);
        }
    } 

    return(
        <>
        <Header/>
        <section className={styles.homepage}>
            <section className={styles.sec}>
                <div className={styles.divleft}>
                    <div className={styles.leftpeq}>
                        <img src="\images\image peq.png" alt="" />
                        <img src="\images\img peq.png" alt="" />
                        <img src="\images\img pq.png" alt="" />
                    </div>
                    <div className={styles.leftgrand}>
                        <img src="\icons\arrow_back.svg" alt="" className={styles.seta} />
                        <img src="\images\img grande.png" alt="" />
                    </div>
                </div>
                <div className={styles.divright}>
                    <p> {`Masculino > Casacos > Blvck Mohair Branded Sweater`}</p>
                    <h2>Blvck Mohair Branded Sweater</h2>
                    <h5>R$ 646,00 <span><del>R$746,00</del></span></h5>
                    <p>X itens em estoque</p>
                    <div className={styles.quant}>
                        <div className={styles.inptxt}>
                            <p>Quantidade</p>
                            <select name="opcoes">
                                <option value="opcao1">1</option>
                                <option value="opcao2">2</option>
                                <option value="opcao3">3</option>
                            </select>
                        </div>
                        <div  className={styles.inptxt}>
                            <p>Tamanho</p>
                            <select name="opcoes">
                                <option value="opcao1">M</option>
                                <option value="opcao2">G</option>
                                <option value="opcao3">P</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.botao}>
                        <button>Adicionar ao Carrinho</button>
                        <div className={styles.fav}>
                            <img src="\icons\favorite_border (1).svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className={styles.frete}>Calcular frete</p>
                        <div className={styles.inptfinal}>
                            <input type="text" placeholder='40020-000' />
                        <div className={styles.setta}><img src="\icons\arrow_forward (2).svg" alt="" /></div>
                    </div>
                    </div>
                    
                    <div className={styles.descricao}>
                        <p>Descrição do produto</p>
                        <p>
                        Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.
                        </p>
                    </div>
                    <div>
                        <p>Tags</p>
                        <div className={styles.tag}>
                            <p>Sweater</p>
                            <p>Casacos</p>
                            <p>Roupas</p>
                            <p>Masculino</p>
                        </div>
                    </div>

                    <div className={styles.descricao}>
                        <p>Coleção</p>
                        <h3 style={{fontSize: '24px'}}>Blvck Mohair</h3>
                        <p>
                        A coleção Blvck Mohair da Blvck é uma expressão de elegância atemporal e textura luxuosa. Cada peça é cuidadosamente confeccionada para alcançar um equilíbrio perfeito entre o estilo contemporâneo e o conforto. O Mohair, conhecido por sua suavidade e sedosidade, acrescenta uma sensação de luxo a suéteres, blazers, saias e muito mais. Esta coleção versátil e sofisticada é um convite para explorar o mundo da moda de alta qualidade e estilo atemporal.
                        </p>
                        <div className={styles.btn2}>
                            <button>
                                Conhecer Coleção
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* produtos semelhantes */}
            <section className={styles.div1}>
            <h2 className={styles.spana}> Produtos Semelhantes</h2>
                <div className={styles.gridprodutos2}>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  /> {/* BANCO DE DADOS */}
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3> {/* BANCO DE DADOS */}
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p> {/* BANCO DE DADOS */}
                            <p><span>X Itens em estoque</span></p> {/* BANCO DE DADOS */}
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Evil Twin Teddy Bear Hoodie</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p> 
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck x Keith Haring Heart Cardigan</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck x Keith Haring Heart Cardigan</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.btn3}>
                    <button>
                        Ver Mais
                    </button>
                </div>
            </section>
            
            {/* outros produtos */}
            <section className={styles.div1}>
            <h2 className={styles.spana}> Outros produtos</h2>
                <div className={styles.gridprodutos3}>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  /> {/* BANCO DE DADOS */}
                        <div className={styles.txtproduto}>
                            <h3>Blvck Mohair Branded Sweater</h3> {/* BANCO DE DADOS */}
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p> {/* BANCO DE DADOS */}
                            <p><span>X Itens em estoque</span></p> {/* BANCO DE DADOS */}
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Evil Twin Teddy Bear Hoodie</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p> 
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck x Keith Haring Heart Cardigan</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck x Keith Haring Heart Cardigan</h3>
                            <p>R$ 654,00<span> <del>R$ 746,00</del></span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Blazer Dress</h3>
                            <p>R$ 1.077,00</p>
                            <p><span>X Itens em estoque</span></p>
                        </div>
                    </div>
                    <div className={styles.produto}>
                        <img src="\images\imgprod.png" alt="BD"  />
                        <div className={styles.txtproduto}>
                            <h3>Blvck Bandana Shorts</h3>
                            <p>R$ 404,00</p>
                        </div>
                    </div>
                </div>
                <div className={styles.btn3}>
                    <button>
                        Ver Mais
                    </button>
                </div>
            </section>
        </section>
        
        <Footer/>
    </>
    )
}