/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../page.module.css';


export default function EditProd() {
  return (
    <>
      <div className={styles.fcontainer}>
        <div className={styles.fDiv}>
          <h1 style={{ textAlign: 'center' }}>Editar Produto </h1>
          <div className={styles.fDivContent}>
            <div className={styles.fProdImg}>
              <div className={styles.fImgColContainer}>
                <img src="\images\products\blvcMohairBrandedSweater.png" alt="" className={styles.fImgCol} />
                <img src="\images\products\blvcMohairBrandedSweater2.png" alt="" className={styles.fImgCol} />
                <img src="\images\products\blvcMohairBrandedSweater3.png" alt="" className={styles.fImgCol} />
              </div>
              <img src="\images\products\blvcMohairBrandedSweater.png" alt="" className={styles.fImgEdit} />
              <div>
                <button className={styles.fSaveBtn}>Salvar</button>
                <button className={styles.fEditBtn}>Excluir</button>
                <button className={styles.fEditBtn}>Cancelar</button>
              </div>
            </div>
            <div className={styles.fProdEditContent}>
              <div className={styles.fEditNameContainer}>
                <label className={styles.fEditLabel}>Nome</label>
                <input className={styles.fEditInput} />
              </div>
              <div className={styles.fEditContainerInput}>
                <div className={styles.fEditLabelContainer}>
                  <label className={styles.fEditLabel}>Preço Atual</label>
                  <div className={styles.fEditPrice}>
                    <p>R$</p>
                    <input className={styles.fEditPriceInput} />
                  </div>
                </div>
                <div className={styles.fEditLabelContainer}>
                  <label className={styles.fEditLabel}>Preço antigo <span>(opcional)</span></label>
                  <div className={styles.fEditPrice}>
                    <p>R$</p>
                    <input className={styles.fEditPriceInput} />
                  </div>
                </div>
              </div>
              <label className={styles.fEditLabel}>Estoque</label>
              <div className={styles.fEditStockContainer}>
                <p className={styles.fEditStockLabel}>P</p>
                <input className={styles.fEditStock} placeholder='1' />
                <p className={styles.fEditStockLabel}>M</p>
                <input className={styles.fEditStock} placeholder='1' />
                <p className={styles.fEditStockLabel}>G</p>
                <input className={styles.fEditStock} placeholder='1' />
                <p className={styles.fEditStockLabel}>GG</p>
                <input className={styles.fEditStock} placeholder='1' />
                <p className={styles.fEditStockLabel}>XGG</p>
                <input className={styles.fEditStock} placeholder='1' />
              </div>
              <div className={styles.fEditDescContainer}>
                <label className={styles.fEditLabel}>Descrição</label>
                <textarea className={styles.fEditDesc} />
              </div>
              <div className={styles.fEditTagContainer}>
                <label className={styles.fEditLabel}>Tags</label>
                <input type="text" placeholder='Digite a tag' />
              </div>
              <div className={styles.fEditColectionContainer}>
                <label className={styles.fEditLabel}>Coleção</label>
                <input type="text" placeholder='Digite a coleção' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
