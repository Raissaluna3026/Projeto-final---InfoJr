/* eslint-disable @next/next/no-img-element */
import styles from '../page.module.css';

export default function Footer(){

    return(
        <div className={styles.fundofooter}>
            <div className={styles.footer}>
                <div className={styles.leftfooter}>
                    <p>Participe da nossa Newsletter<br/> e fique por dentro dos lançamentos</p>
                    <div className={styles.inpimg}>
                        <input type="text" placeholder='Digite seu email' />
                        <img src="\icons\arrow_forward (1).svg" alt="" />
                    </div>
                    <p>BLVCK</p>
                </div>
                <div className={styles.rightfooter}>
                    <p>FAQ</p>
                    <p>Termos e Condições</p>
                    <p>contato@blvck.com</p>
                    <div className={styles.iconsfooter}>
                        <img src="\icons\facebook.svg" alt="" />
                        <img src="\icons\instagram.svg" alt="" />
                        <img src="\icons\linkedin.svg" alt="" />
                        <img src="\icons\TwitterX.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}