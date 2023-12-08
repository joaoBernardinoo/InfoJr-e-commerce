'use client';

import styles from './page.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inf_esq}>
                <h6>Participe da nossa Newsletter<br></br>
                e fique por dentro dos lançamentos</h6>
                <div>
                    <input className={styles.dig_email} placeholder="Digite seu email"></input>
                </div>
                <h6>BLCVK</h6>
            </div>
            <div className={styles.inf_dir}>
                <h6>FAQ</h6>
                <h6>Termos e Condições</h6>
                <h6>Contato@blvck.com</h6>
            <div className={styles.icons}>
                <h6>face</h6>
                <h6>inst</h6>
                <h6>link</h6>
                <h6>twitt</h6>
            </div>
            </div>
        </footer>
    )
}