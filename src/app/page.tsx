"use client"
import favoritos from "./imagens/favorite_border.png"
import perfil from "./imagens/person_outline.png"
import carrinho from "./imagens/shopping_cart.png"

import mainbanner from './imagens/mainBanner.png'

import card_es_1 from './imagens/cards_coleção/cardsColeção.png'
import card_esq_2 from './imagens/cards_coleção/cardsColeção (1).png'
import card_dir from './imagens/cards_coleção/cardsColeção (2).png'

import produtos from './imagens/cards_produtos/productCards.png'

import Image from "next/image"
import styles from './page.module.css'
import Link from 'next/link';
import { useState } from "react"


export default function Home() {
  
  const [prods, setProds] = useState([
    {
      name: "Blvck Mohair Branded Sweater",
      current_price: 654.00,
      old_price: 746.00,
      available_quantity: 7,
      size: ['P', 'M', 'G', 'GG'],
      product_description: "Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.",
      tags: ['Sweater', 'Casacos', 'Roupa'],
      image: [produtos, produtos, produtos]
    },
    {
      name: "Blvck Mohair Branded Sweater",
      current_price: 654.00,
      old_price: 746.00,
      available_quantity: 7,
      size: ['P', 'M', 'G', 'GG'],
      product_description: "Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.",
      tags: ['Sweater', 'Casacos', 'Roupa'],
      image: [produtos, produtos, produtos]
    },
    {
      name: "Blvck Mohair Branded Sweater",
      current_price: 654.00,
      old_price: 746.00,
      available_quantity: 7,
      size: ['P', 'M', 'G', 'GG'],
      product_description: "Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.",
      tags: ['Sweater', 'Casacos', 'Roupa'],
      image: [produtos, produtos, produtos]
    },
    {
      name: "Blvck Mohair Branded Sweater",
      current_price: 654.00,
      old_price: 746.00,
      available_quantity: 7,
      size: ['P', 'M', 'G', 'GG'],
      product_description: "Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.",
      tags: ['Sweater', 'Casacos', 'Roupa'],
      image: [produtos, produtos, produtos]
    },
    {
      name: "Blvck Mohair Branded Sweater",
      current_price: 654.00,
      old_price: 746.00,
      available_quantity: 7,
      size: ['P', 'M', 'G', 'GG'],
      product_description: "Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.",
      tags: ['Sweater', 'Casacos', 'Roupa'],
      image: [produtos, produtos, produtos]
    },
    {
      name: "Blvck Mohair Branded Sweater",
      current_price: 654.00,
      old_price: 746.00,
      available_quantity: 7,
      size: ['P', 'M', 'G', 'GG'],
      product_description: "Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.",
      tags: ['Sweater', 'Casacos', 'Roupa'],
      image: [produtos, produtos, produtos]
    },

])

  return (
    <main className={styles.main}>      
      <div className={styles.principal}>
        <div className='box1'>
          <h1 className={styles.titulo}>
            Keith Haring & Blvck 
            <br></br>
            Uma Fusão de Arte e Moda
          </h1>
            <Link href="/colecao"><button className={styles.cbut}>Conheça a Coleção</button></Link>
          <div className='mainban'>
            <Image className={styles.mainban} src={mainbanner} alt='mb'></Image>
          </div>
        </div>
        <div className='box2'>
          <div className={styles.subtitulo}>
            <p>Conheça Também</p>
          </div>
          <div className={styles.cardcolecao}>
            <div className={styles.esquerda}>
              <Image src={card_es_1} alt='ces1'></Image>
              <Image src={card_esq_2} alt='ces2'></Image>
            </div>
            <div className={styles.direita}>
              <Image className={styles.imdi} src={card_dir} alt='ces2'></Image>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className={styles.subtitulo}>
            <p>Produtos</p>
            <div className={styles.outros_produtos}>
              <Image src={produtos} alt='prod'></Image>
              <Image src={produtos} alt='prod'></Image>
              <Image src={produtos} alt='prod'></Image>
            </div>
            <div className={styles.subtitulo}>
            <p><button className={styles.cbut}>Ver Mais</button></p>
            </div>
          </div>
        </div>
      </div>      
    </main>
  )
}
