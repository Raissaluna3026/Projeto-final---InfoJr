"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../fpage.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

function page() {
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
  return (
    <>
      < Header />
      <main className={styles.fCartMain}>
        <h1>Seu Carrinho</h1>
        <div className={styles.fCartWrapper}>
          <div className={styles.fCartItems}>
            <div className={styles.fCartItem}>
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
            </div>
          </div>
          <div>
            <div className={styles.fCartTotal}>
              <div className={styles.fCartTotalInfo}>
                <p>Subtotal</p>
                <h1>R$ 0,00</h1>
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
              <button>Continuar comprando</button>
              <p>Limpar carrinho</p>
            </div>
          </div>
        </div>
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
        <div className={styles.fCartOtherProd}>
          <h1>Outros produtos</h1>
          <div className={styles.fCartOtherProdItems}>
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
          </div>
        </div>
        <button className={styles.fCartSeeMoreButton}>Ver Mais</button>
      </main>
      <Footer />
    </>
  )
}

export default page