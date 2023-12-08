'use client'

import favoritos from "@/app/imagens/favorite_border.png"
import perfil from "@/app/imagens/person_outline.png"
import carrinho from "@/app/imagens/shopping_cart.png"

import Link from "next/link";
import styles from './page.module.css'
import Image from "next/image"

export default function Header() {
    return (
        <header className={styles.header}>
            <h3 className={styles.logo}>BLCVK</h3>
            <div className={styles.informacao}>
            <Link href="/produtos"><h3>Produtos</h3></Link>
            <Link href="/colecao"><h3>Coleções</h3></Link>
            <Link href="/sobre"><h3>Sobre</h3></Link>
            </div>
            <div className={styles.pessoal}>
            <h3><Image src={carrinho} alt='car'></Image></h3>
            <h3><Image src={favoritos} alt='fav'></Image></h3>
            <h3><Image src={perfil} alt='per'></Image></h3>
            </div>
        </header>
    )
}'use client';

import Link from 'next/link';
import styles from './page.module.css'

import favoritos from "@/app/imagens/favorite_border.png"
import perfil from "@/app/imagens/person_outline.png"
import carrinho from "@/app/imagens/shopping_cart.png"

import Image from "next/image"


export default function Header () {
    return (
        <header className={styles.header}>
            <Link href={"/"}><h3 className={styles.logo}>BLCVK</h3></Link>            
            <div className={styles.informacao}>
                <Link href="/produtos"><h3>Produtos</h3></Link>
                <Link href="/colecao"><h3>Coleções</h3></Link>
                <Link href="/sobre"><h3>Sobre</h3></Link>
            </div>
            <div className={styles.pessoal}>
                <h3><Image src={carrinho} alt='car'></Image></h3>
                <h3><Image src={favoritos} alt='fav'></Image></h3>
                <h3><Image src={perfil} alt='per'></Image></h3>
            </div>
      </header>
    )
}