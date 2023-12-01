import carrinho from "../imagens/shopping_cart.png"
import favoritos from "../imagens/favorite_border.png"
import perfil from "../imagens/person_outline.png"

import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Sobre() {
    return (
        <main>
            <header className={styles.header}>
                <h3 className={styles.logo}>BLCVK</h3>
                <div className={styles.informacao}>
                    <Link href="/produtos"><h3>Produtos</h3></Link>
                    <Link href="/colecao"><h3>Coleções</h3></Link>
                    <h3>Sobre</h3>
                </div>
                <div className={styles.pessoal}>
                    <h3><Image src={carrinho} alt='car'></Image></h3>
                    <h3><Image src={favoritos} alt='fav'></Image></h3>
                    <h3><Image src={perfil} alt='per'></Image></h3>
                </div>
            </header>
            <footer className={styles.footer}>
                <div className={styles.inf_esq}>
                    <h6>Participe da nossa Newsletter<br></br>
                        e fique por dentro dos lançamentos</h6>
                    <div><input className={styles.dig_email} placeholder="Digite seu email"></input></div>
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
        </main>
    )
}