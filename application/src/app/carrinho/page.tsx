"use client"
/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect, useContext} from 'react'
import styles from '../fpage.module.css'
import Header from '../components/header'
import Link from 'next/link';
import Footer from '../components/footer'
import { ChartContext } from '../contexts/chartContext';
import { Product } from '@prisma/client';

interface QuantitiesState {
  [productId: number]: number;
}

interface SizesState {
  [productId: number]: string;
}

function page() {
  const [allProducts, setAllProducts] = useState<Product[]>([]); 
  const [chart, setChart] = useState<Product[]>([]); //exemplo p apagar depois
  const [emptyChart, setEmptyChart] = useState(false);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [quantities, setQuantities] = useState<QuantitiesState>({});
  const [sizes, setSizes] = useState<SizesState>({});
  const { chartProducts, removeAllProducts, addProduct } = useContext(ChartContext);

  const handleZipCode = (e: { target: any }) => {
    let input = e.target
    input.value = zipCodeMask(input.value)
  }

  const zipCodeMask = (value: string) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    return value
  }

  const resetChart = () =>{
    setChart([]);
    removeAllProducts();
    setEmptyChart(true);
  }

  const handleBuy = () =>{
    // pegar o produto pelo id e tamanho e subtrair a quantidade
    // se a quantidade for igual a quantidade do estoque, remove o produto do banco de dados?
    
    // removeAllProducts();
    setEmptyChart(true);
  }

  // pega todos os produtos do banco de dados
  const fetchProducts = async () => {
    try {
        const res = await fetch("../api/v1/product/all");

        if (!res.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        
        const data: Product[] = await res.json();
        
        setAllProducts(data);
      } catch (error) {
        console.log('fetch error: ', error);
    }
}

  const updateQuantity = (productId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value) || 0;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  }

  const updateSize = (productId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = event.target.value;
    setSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: newSize,
    }))
  }

  const calculateFinalPrice = () => {
    let amount: number = 0;
    chartProducts.forEach((product) => {
      amount += product.discountPrice * quantities[product.id];
    })
    
    setFinalPrice(amount);
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

  const addToChart = (product: Product) =>{
    if(product){
        addProduct(product);
    }   
    setEmptyChart(false);
  }

  useEffect(() => {
    calculateFinalPrice();
  }, [quantities]);
  
  useEffect(() => {
    if(chartProducts.length>0){
      setChart(chartProducts);
    }
    else{
      setEmptyChart(true);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    setChart(chartProducts);
  }, [addToChart]);

  return (
    <>
      < Header />
      <main className={styles.fCartMain}>
        <h1>Seu Carrinho</h1>

          {emptyChart? (
              <div>
                <h2>Seu carrrinho está vazio</h2>
                <p>Adicione novos itens ao carrinho antes de prosseguir para o pagamento!</p>
                <div className={styles.fCartButtons}>
                  <Link  href={"/"}> <button>Continuar comprando</button> </Link>
                </div>
              </div>

            ) : (
            <div className={styles.fCartWrapper}>

              {/* itens */}
              <div className={styles.fCartItems}>
                {/* mapeamento pra tirar do comentário dps */}
                {chart.map((item, index) => {
                  return(
                    <div className={styles.fCartItem} key={index}>
                      <img src="\images\products\blvcMohairBrandedSweater.png" width={75} alt='Prod' />
                      <div className={styles.fCartItemInfo}>
                        <h3>{item.name}</h3>
                        <p>R$ {item.discountPrice.toFixed(2).replace('.',',')}</p>
                        <p>{getAvailableUnits(item)} itens em estoque</p>
                        <div className={styles.fCartInput}>
                          <div className={styles.fCartInputWrapper}>
                            <label htmlFor="Quantidade">Quantidade</label>
                            <input type="number" name="Quantidade" max={getAvailableUnits(item)}
                                  value={quantities[item.id] ? quantities[item.id] : 0} 
                                  onChange={(e) => updateQuantity(item.id, e)}/>
                          </div>
                          <div className={styles.fCartInputWrapper}>
                            <label htmlFor="Tamanho">Tamanho</label>
                            <input type="text" name="Tamanho" 
                                  value={sizes[item.id] ? sizes[item.id] : ""}
                                  onChange={(e) => updateSize(item.id, e)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/* <div className={styles.fCartItem}>
                  <img src="\images\products\blvcMohairBrandedSweater.png" width={75} alt='Prod' />
                  <div className={styles.fCartItemInfo}>
                    <h3>Blvck Mohair Branded Sweater</h3>
                    <p>R$ 646,00</p>
                    <p>2 itens em estoque</p>
                    <div className={styles.fCartInput}>
                      <div className={styles.fCartInputWrapper}>
                        <label htmlFor="Quantidade">Quantidade</label>
                        <input type="number" name="Quantidade" id="" />
                      </div>
                      <div className={styles.fCartInputWrapper}>
                        <label htmlFor="Tamanho">Tamanho</label>
                        <input type="text" name="Tamanho" id="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.fCartItem}>
                  <img src="\images\products\blvcMohairBrandedSweater.png" alt="" />
                  <div className={styles.fCartItemInfo}>
                    <h3>Blvck Mohair Branded Sweater</h3>
                    <p>R$ 646,00</p>
                    <p>2 itens em estoque</p>
                    <div className={styles.fCartInput}>
                      <div className={styles.fCartInputWrapper}>
                        <label htmlFor="Quantidade">Quantidade</label>
                        <input type="number" name="Quantidade" id="" />
                      </div>
                      <div className={styles.fCartInputWrapper}>
                        <label htmlFor="Tamanho">Tamanho</label>
                        <input type="text" name="Tamanho" id="" />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
          
              {/* bloco de compra */}
              <div>
                <div className={styles.fCartTotal}>
                  <div className={styles.fCartTotalInfo}>
                    <p>Subtotal</p>
                    <h1>R$ {finalPrice ? finalPrice.toFixed(2).replace('.', ',') : "0,00"}</h1> 
                    <button>Comprar Agora</button>
                  </div>
                  <br />
                  <div className={styles.fFreteWrapper}>
                    <label htmlFor="frete">Calcular Frete</label>
                    <br />
                    <div className={styles.fCepWrapper}>
                      <input type="text" maxLength={9} onKeyUp={handleZipCode} name="frete" />
                      <img src="\icons\arrow_forward.svg" alt="" />
                    </div>
                    <p>Preço de frete para Salvador, Bahia: R$ 26,00</p>
                  </div>
                </div>
                <div className={styles.fCartButtons}>
                  <Link  href={"/"}> <button>Continuar comprando</button> </Link>
                  <p onClick={resetChart}>Limpar carrinho</p>
                </div>
              </div>
            </div>
          )}
          

          
        

        {/* vistos recentemente */}
        <div className={styles.fCartRecent}>
          <h1>Vistos Recentemente</h1>
          <div className={styles.fCartRecentItems}>
            <div className={styles.fCartRecentItem}>
              <img src="\images\products\blvcMohairBrandedSweater.png" width={265} alt="" />
              <div className={styles.fCartRecentItem}>
                <h3>Blvck Mohair Branded Sweater</h3>
                <p>R$ 646,00</p>
                <p>2 itens em estoque</p>
                <button className={styles.fCartButton}>Adicionar ao carrinho</button>
              </div>
            </div>
            <div className={styles.fCartRecentItem}>
              <img src="\images\products\blvcMohairBrandedSweater.png" width={265} alt="" />
              <div className={styles.fCartRecentItem}>
                <h3>Blvck Mohair Branded Sweater</h3>
                <p>R$ 646,00</p>
                <p>2 itens em estoque</p>
                <button className={styles.fCartButton}>Adicionar ao carrinho</button>
              </div>
            </div>
            <div className={styles.fCartRecentItem}>
              <img src="\images\products\blvcMohairBrandedSweater.png" width={265} alt="" />
              <div className={styles.fCartRecentItem}>
                <h3>Blvck Mohair Branded Sweater</h3>
                <p>R$ 646,00</p>
                <p>2 itens em estoque</p>
                <button className={styles.fCartButton}>Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        </div>

        {/* outros produtos */}
        <div className={styles.fCartOtherProd}>
          <h1>Outros produtos</h1>
          <div className={styles.fCartOtherProdItems}>
          {allProducts.map((product, index) => {
              return(
                  <div className={styles.fCartOtherProdItem} key={index}>
                      <img src={product.images[0]} alt="BD" width={265} height={265}  />
                      <div>
                          <h3>{product.name}</h3>
                          <p>R$ {product.discountPrice.toFixed(2).replace('.', ',')}</p>
                          <p><span>{getAvailableUnits(product)} Itens em estoque</span></p>
                          <button className={styles.fCartButton} onClick={() => addToChart(product)}>Adicionar ao carrinho</button>
                      </div>
                  </div>
              )
            })}
            {/* <div className={styles.fCartOtherProdItem}>
              <img src="\images\products\blvcMohairBrandedSweater.png" width={265} alt="" />
              <div>
                <h3>Blvck Mohair Branded Sweater</h3>
                <p>R$ 646,00</p>
                <p>2 itens em estoque</p>
                <button className={styles.fCartButton}>Adicionar ao carrinho</button>
              </div>
            </div>
            <div className={styles.fCartOtherProdItem}>
              <img src="\images\products\blvcMohairBrandedSweater.png" width={265} alt="" />
              <div>
                <h3>Blvck Mohair Branded Sweater</h3>
                <p>R$ 646,00</p>
                <p>2 itens em estoque</p>
                <button className={styles.fCartButton}>Adicionar ao carrinho</button>
              </div>
            </div>
            <div className={styles.fCartOtherProdItem}>
              <img src="\images\products\blvcMohairBrandedSweater.png" width={265} alt="" />
              <div>
                <h3>Blvck Mohair Branded Sweater</h3>
                <p>R$ 646,00</p>
                <p>2 itens em estoque</p>
                <button className={styles.fCartButton}>Adicionar ao carrinho</button>
              </div>
            </div>
            <div className={styles.fCartOtherProdItem}>
              <img src="\images\products\blvcMohairBrandedSweater.png" width={265} alt="" />
              <div>
                <h3>Blvck Mohair Branded Sweater</h3>
                <p>R$ 646,00</p>
                <p>2 itens em estoque</p>
                <button className={styles.fCartButton}>Adicionar ao carrinho</button>
              </div>
            </div>
            <div className={styles.fCartOtherProdItem}>
              <img src="\images\products\blvcMohairBrandedSweater.png" width={265} alt="" />
              <div>
                <h3>Blvck Mohair Branded Sweater</h3>
                <p>R$ 646,00</p>
                <p>2 itens em estoque</p>
                <button className={styles.fCartButton}>Adicionar ao carrinho</button>
              </div>
            </div>
            <div className={styles.fCartOtherProdItem}>
              <img src="\images\products\blvcMohairBrandedSweater.png" width={265} alt="" />
              <div>
                <h3>Blvck Mohair Branded Sweater</h3>
                <p>R$ 646,00</p>
                <p>2 itens em estoque</p>
                <button className={styles.fCartButton}>Adicionar ao carrinho</button>
              </div>
            </div> */}
          </div>
        </div>
        <button className={styles.fCartSeeMoreButton}>Ver Mais</button>
      </main>
      <Footer />
    </>
  )
}

export default page