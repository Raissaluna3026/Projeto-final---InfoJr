"use client"
/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, ReactComponentElement, SetStateAction, useState } from 'react'
import styles from '../fpage.module.css';

interface EditProdProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

type Stock = {
  P?: string,
  M?: string,
  G?: string,
  GG?: string,
  XGG?: string,
}

export default function EditProd({closeModal} : EditProdProps) {
  const [tags, setTags] = useState<string[]>([])
  const [formData, setFormData] = useState({})
  const [stock, setStock] = useState<Stock[]>([])

  function handleTagSelection(e: React.ChangeEvent<HTMLInputElement>){
    const newTag = e.target.value
    
    if(!tags.find((tag) => tag == newTag)){
      setTags([...tags, e.target.value])
    }
    
    e.target.value = ""
  }
  
  function handleInputFormData(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>){
    setFormData({...formData, [e.target.name] : e.target.value })
    console.log(formData)
  }

  function handleStockQuantityData(e: React.ChangeEvent<HTMLInputElement>){
    if(stock.find((types) => types))
    
    setStock([...stock, {
      [e.target.name] : [e.target.value]
    }])

    setFormData({...formData, "stock": [stock]})
  }

  return (
    <>
      <div className={styles.fcontainer}>
        <div className={styles.fDiv}>
          <h1 style={{ textAlign: 'center' }}>Editar Produto </h1>
          <div className={styles.fDivContent}>
            <div className={styles.fProdImg}>
              <div className={styles.fImgColContainer}>
                <img src="\images\products\blvcMohairBrandedSweater.png" width={100} alt="" className={styles.fImgCol} />
                <img src="\images\products\blvcMohairBrandedSweater2.png" width={100} alt="" className={styles.fImgCol} />
                <img src="\images\products\blvcMohairBrandedSweater3.png" width={100} alt="" className={styles.fImgCol} />
              </div>
              <div className={styles.fImgWrap}>
                <img src="\images\products\blvcMohairBrandedSweater.png" alt="" className={styles.fImgEdit} />
                <div>
                  <button className={styles.fSaveBtn} onClick={() => closeModal(false)}>Salvar</button>
                  <button className={styles.fEditBtn} onClick={() => closeModal(false)}>Excluir</button>
                  <button className={styles.fEditBtn} onClick={() => closeModal(false)}>Cancelar</button>
                </div>
              </div>
            </div>
            <div className={styles.fProdEditContent}>
              <div className={styles.fEditNameContainer}>
                <label className={styles.fEditLabel}>Nome</label>
                <input className={styles.fEditInput} name="name" onChange={(e) => handleInputFormData(e)} />
              </div>
              <div className={styles.fEditContainerInput}>
                <div className={styles.fEditLabelContainer}>
                  <label className={styles.fEditLabel}>Preço Atual</label>
                  <div className={styles.fEditPrice}>
                    <p>R$</p>
                    <input className={styles.fEditPriceInput} name="discountPrice" onChange={(e) => handleInputFormData(e)}/>
                  </div>
                </div>
                <div className={styles.fEditLabelContainer}>
                  <label className={styles.fEditLabel}>Preço antigo <span>(opcional)</span></label>
                  <div className={styles.fEditPrice}>
                    <p>R$</p>
                    <input className={styles.fEditPriceInput} name="totalPrice"  onChange={(e) => handleInputFormData(e)}/>
                  </div>
                </div>
              </div>
              <label className={styles.fEditLabel}>Estoque</label>
              <div className={styles.fEditStockContainer}>
                <p className={styles.fEditStockLabel}>P</p>
                <input className={styles.fEditStock} placeholder='1'  name="P" onChange={(e) => handleStockQuantityData(e)}/>
                <p className={styles.fEditStockLabel}>M</p>
                <input className={styles.fEditStock} placeholder='1' name="M"  onChange={(e) => handleStockQuantityData(e)}/>
                <p className={styles.fEditStockLabel}>G</p>
                <input className={styles.fEditStock} placeholder='1' name="G"  onChange={(e) => handleStockQuantityData(e)}/>
                <p className={styles.fEditStockLabel}>GG</p>
                <input className={styles.fEditStock} placeholder='1' name="GG"  onChange={(e) => handleStockQuantityData(e)}/>
                <p className={styles.fEditStockLabel}>XGG</p>
                <input className={styles.fEditStock} placeholder='1' name="XGG"  onChange={(e) => handleStockQuantityData(e)}/>
              </div>
              <div className={styles.fCreateDesc}>
                <label className={styles.fEditLabel}>Descrição</label>
                <textarea className={styles.fEditDesc} name="description" onChange={(e) => handleInputFormData(e)}/>
              </div>
              <div className={styles.fCreateDesc}>
                <label className={styles.fEditLabel}>Tags</label>
                <input type='text' placeholder='Digite a tag' list='tags' onChange={(e) => handleTagSelection(e)}/>
                <datalist id='tags'>
                  <option value={"masculino"}>MASCULINO</option>
                  <option value={"camisa"}>Camisa</option>
                </datalist>
              </div>
              <div className={styles.fEditColectionContainer}>
                <label className={styles.fEditLabel}>Coleção</label>
                <input type='text' placeholder='Digite a coleção' list='collection' onChange={(e) => handleInputFormData(e)}/>
                <datalist id='collection'>
                  <option value={"Keith Haring & Blvck"}>Keith Haring & Blvck</option>
                  <option value={"Fortnite & Blvck"}>Fortnite & Blvck</option>
                  <option value={"Shorts"}>Shorts</option>
                  <option value={"Whte"}>Whte</option>
                </datalist>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
