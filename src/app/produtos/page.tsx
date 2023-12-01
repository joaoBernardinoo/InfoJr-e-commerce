import carrinho from "../imagens/shopping_cart.png"
import favoritos from "../imagens/favorite_border.png"
import perfil from "../imagens/person_outline.png"
import produtos from "../imagens/cards_produtos/productCards.png"
import filter from "../imagens/filtro/filter_list.png"

import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Produtos() {
    return (
        <main>
            <header className={styles.header}>
                <h3 className={styles.logo}>BLCVK</h3>
                <div className={styles.informacao}>
                    <h3>Produtos</h3>
                    <Link href="/colecao"><h3>Coleções</h3></Link>
                    <Link href="/sobre"><h3>Sobre</h3></Link>
                </div>
                <div className={styles.pessoal}>
                    <h3><Image src={carrinho} alt='car'></Image></h3>
                    <h3><Image src={favoritos} alt='fav'></Image></h3>
                    <h3><Image src={perfil} alt='per'></Image></h3>
                </div>
            </header>
                <div className={styles.box1}>
                    <div className={styles.titulo}>
                        <h1>Produtos</h1>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.box3}>
                            <div className={styles.l_esq}>
                                <input className={styles.pesquisar} placeholder="Pesquisar"></input>
                                <h3>X itens encontrados</h3>
                            </div>
                            <div className={styles.l_dir}>
                                <div className={styles.filtro}>
                                    <button className={styles.filtro_b}><h3>Filtros <Image src={filter} alt='fil'></Image></h3></button>
                                </div>
                                <div className={styles.tags}>
                                    <h3>tag 1</h3>
                                    <h3>tag 2</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.produtos}>
                            <Image src={produtos} alt='prod'></Image>
                            <Image src={produtos} alt='prod'></Image>
                            <Image src={produtos} alt='prod'></Image>
                        </div>
                        <div className={styles.produtos}>
                            <Image src={produtos} alt='prod'></Image>
                            <Image src={produtos} alt='prod'></Image>
                            <Image src={produtos} alt='prod'></Image>
                        </div>
                        <div className={styles.produtos}>
                            <Image src={produtos} alt='prod'></Image>
                            <Image src={produtos} alt='prod'></Image>
                            <Image src={produtos} alt='prod'></Image>
                        </div>
                    </div>
                    <div className={styles.editar}>
                        <Link href="/edicao"><h1>Editar</h1></Link>
                    </div>
                </div>
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