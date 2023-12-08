/* eslint-disable @next/next/no-img-element */
import React, { useState, Dispatch, SetStateAction } from 'react'
import styles from '../fpage.module.css';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { prisma } from '../../../prisma/Client/Prisma';

const generateFileNameId = () => (new Date + Math.random().toString(36).substring(2, 15))
interface CreateProdProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

type Stock = {
  P?: string,
  M?: string,
  G?: string,
  GG?: string,
  XGG?: string,
}

const s3 = new S3Client({
  region: "sa-east-1",
  credentials: {
      accessKeyId: "AKIA45PZ7ID23KUPPMGC",
      secretAccessKey: "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"
  }
})

const putObjectCommand = new PutObjectCommand({
  Bucket: "ecommerce-product-images-infojr",
  Key: generateFileNameId()
})


export default function CreateProd({ closeModal }: CreateProdProps) {
  const [images, setImages] = useState<File[]>([]);
  const [fileName, setFileName] = useState("No selected file");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const [stock, setStock] = useState<Stock[]>([])
  const [formData, setFormData] = useState({})

  //Adiciona um objeto em formData com o nome e o valor do campo recuperado
  function handleInputFormData(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>){
    setFormData({...formData, [e.target.name] : e.target.value })
    console.log(formData)
  }

  function handleSelectTags(e: React.ChangeEvent<HTMLInputElement>){
    setTag(e.target.value)
    handleInputFormData(e)
  }

  function calculateStockQuantity(){
    const listOfEverySizeInput = document.querySelectorAll('input[placeholder="1"]');
  
    let sum = 0
    
    listOfEverySizeInput.forEach(input => {
      if(input.value){
        sum += parseInt(input.value)
      }
    })

    return sum
  }

  function handleStockQuantityData(e: React.ChangeEvent<HTMLInputElement>){
    let aux = 1
    for(let i = 0; i < stock.length; i++){
      if(e.target.name in stock[i]){
        stock[i] = {[e.target.name] : [e.target.value]}
        aux = 0
      }
    }
  
    if(aux){
      setStock([...stock, {
        [e.target.name] : [e.target.value]
      }])
    }
    setFormData({...formData, "quantity": calculateStockQuantity()})
    setFormData({...formData, "stockSize": [stock]})
  }

  async function sendCreateProductFormData() {
    const headers = new Headers()

    headers.append("Content-Type", "application/json")
    const productId = await fetch('http://localhost:3000/api/v1/product/create', {
      headers,
      method: "POST",
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(objectResponse => requestStorageImagesFor(objectResponse.id))

  }

  async function requestStorageImagesFor(id: number){
    const headers = new Headers()
    // const sendImageToId = await fetch('http://localhost:3000/api/v1/product/save-image?id=' + id, {
    //   method: "POST",
    //   body: images[0]
    // })

    const signedUrl = await getSignedUrl(s3, putObjectCommand, {
      expiresIn: 60,
    })

    const linksToImages = []
    for(let i = 0; i < images.length; i++){
      await fetch(signedUrl, {
          method: "PUT",
          body: images[i],
        })

        linksToImages.push(signedUrl.split("?")[0])
    }

    await fetch("http://localhost:3000/api/v1/product/save-image", {
      method: "POST",
      body: JSON.stringify({id, images: linksToImages})
    })
  }

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
                  <button className={styles.fSaveBtn} onClick={() => sendCreateProductFormData()}>Salvar</button>
                  <button className={styles.fEditBtn} onClick={() => closeModal(!true)}>Excluir</button>
                  <button className={styles.fEditBtn} onClick={() => closeModal(!true)}>Cancelar</button>
                </div>
              </div>
            </div>
            <div className={styles.fProdEditContent}>
              <div className={styles.fEditNameContainer}>
                <label className={styles.fEditLabel}>Nome</label>
                <input className={styles.fEditInput} name='name' onChange={(e) => handleInputFormData(e)}/>
              </div>
              <div className={styles.fEditContainerInput}>
                <div className={styles.fEditLabelContainer}>
                  <label className={styles.fEditLabel} >Preço Atual</label>
                  <div className={styles.fEditPrice}>
                    <p>R$</p>
                    <input className={styles.fEditPriceInput} name="discountPrice" onChange={(e) => handleInputFormData(e)} />
                  </div>
                </div>
                <div className={styles.fEditLabelContainer}>
                  <label className={styles.fEditLabel}>Preço antigo <span>(opcional)</span></label>
                  <div className={styles.fEditPrice}>
                    <p>R$</p>
                    <input className={styles.fEditPriceInput} name="totalPrice"  onChange={(e) => handleInputFormData(e)} />
                  </div>
                </div>
              </div>
              <label className={styles.fEditLabel}>Estoque</label>
              <div className={styles.fEditStockContainer}>
                <p className={styles.fEditStockLabel}>P</p>
                <input className={styles.fEditStock} placeholder='1' name="P" onChange={(e) => handleStockQuantityData(e)}/>
                <p className={styles.fEditStockLabel}>M</p>
                <input className={styles.fEditStock} placeholder='1' name="M" onChange={(e) => handleStockQuantityData(e)}/>
                <p className={styles.fEditStockLabel}>G</p>
                <input className={styles.fEditStock} placeholder='1' name="G" onChange={(e) => handleStockQuantityData(e)}/>
                <p className={styles.fEditStockLabel}>GG</p>
                <input className={styles.fEditStock} placeholder='1' name="GG" onChange={(e) => handleStockQuantityData(e)}/>
                <p className={styles.fEditStockLabel}>XGG</p>
                <input className={styles.fEditStock} placeholder='1' onChange={(e) => handleStockQuantityData(e)}/>
              </div>
              <div className={styles.fCreateDesc}>
                <label >Descrição do produto</label>
                <textarea className={styles.fEditDesc} name="description" onChange={(e) => handleInputFormData(e)} />
              </div>
              <div className={styles.fCreateDesc}>
                <label className={styles.fEditLabel}>Tags</label>
                <input
                  type="text"
                  placeholder='Digite a tag'
                  name="tags"
                  onChange={(e) => handleSelectTags(e)}
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
                <input type="text" name='collection' placeholder='Digite a coleção' onChange={(e) => handleInputFormData(e)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
