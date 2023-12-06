/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from '../fpage.module.css';


export default function CreateProd() {
  const [images, setImages] = useState<File[]>([]);
  const [fileName, setFileName] = useState("No selected file");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  return (
    <>
      <div className={styles.fcontainer}>
        <div className={styles.fDiv}>
          <h1 style={{ textAlign: 'center' }}>Criar Produto </h1>
          <div className={styles.fDivContent}>
            <div className={styles.fProdImg}>
              <div className={styles.fImgColContainer}>
                <form
                  className={styles.fProdImgInputForm}>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className='input-field'
                    hidden
                    onChange={({ target: { files } }) => {
                      if (files && files.length + images.length <= 5) {
                        setImages([...images, ...files]);
                      } else {
                        alert("Você só pode adicionar até 5 imagens.");
                      }
                    }}
                  />
                  {images.map((image, index) => (
                    <div key={index}>
                      {index >= 1 && (
                        <img src={URL.createObjectURL(image)} alt="" width={75} height={80} />
                      )}
                    </div>
                  ))}
                </form>
                {images.length < 5 && (
                  <button onClick={() => document.querySelector(".input-field")?.click()}>
                    <img className={styles.fAddImgBtn} src="\icons\add.svg" alt="" />
                  </button>
                )}
              </div>
              <div className={styles.fImgWrap}>
                <div className={styles.fImgEdit} >
                  {images.map((image, index) => (
                    <div key={index}>
                      {index === 0 ? (
                        <img src={URL.createObjectURL(image)} alt="" width={400} height={400} />
                      ) : null}
                    </div>
                  ))}
                </div>
                <div>
                  <button className={styles.fSaveBtn}>Salvar</button>
                  <button className={styles.fEditBtn}>Excluir</button>
                  <button className={styles.fEditBtn}>Cancelar</button>
                </div>
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
              <div className={styles.fCreateDesc}>
                <label >Descrição do produto</label>
                <textarea className={styles.fEditDesc} />
              </div>
              <div className={styles.fCreateDesc}>
                <label className={styles.fEditLabel}>Tags</label>
                <input
                  type="text"
                  placeholder='Digite a tag'
                  onChange={(e) => setTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && tag) {
                      setTags([...tags, tag]);
                      setTag('');
                    }
                  }}
                />
                {tags && (
                  <div className={styles.fEditTag}>
                    {tags.map((tag, index) => (
                      <p key={index}>{tag} <img src="\icons\clear.svg" alt="Delete tag" onClick={() => setTags(tags.filter((t) => t !== tag))} ></img></p>
                    ))}
                  </div>
                )}
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
