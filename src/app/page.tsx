'use client';
import mainbanner from './imagens/mainBanner.png';

import card_es_1 from './imagens/cards_coleção/cardsColeção.png'
import card_esq_2 from './imagens/cards_coleção/cardsColeção (1).png';
import card_dir from './imagens/cards_coleção/cardsColeção (2).png';

import produtos from './imagens/cards_produtos/card1.png';
import ProductContext from '@/contexts/products';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';

const produto = [
  {
    id: 1,
    name: 'Blvck Mohair Branded Sweater1',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [produtos, produtos, produtos],
  },
  {
    id: 2,
    name: 'Blvck Mohair Branded Sweater',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [produtos, produtos, produtos],
  },
  {
    id: 3,
    name: 'Blvck Mohair Branded Sweater',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [produtos, produtos, produtos],
  },
  {
    id: 4,
    name: 'Blvck Mohair Branded Sweater',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [produtos, produtos, produtos],
  },
  {
    id: 5,
    name: 'Blvck Mohair Branded Sweater',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [produtos, produtos, produtos],
  },
  {
    id: 6,
    name: 'Blvck Mohair Branded Sweater',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [produtos, produtos, produtos],
  },
];
// Alo alo testando

export default function Home() {
  const { products } = useContext(ProductContext);


  useEffect(() => {
    for (let i = 0; i < produto.length; i++) {
      products.push(produto[i]);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.principal}>
        <div className="box1">
          <h1 className={styles.titulo}>
            Keith Haring & Blvck
            <br></br>
            Uma Fusão de Arte e Moda
          </h1>
          <Link href="/colecao">
            <button className={styles.cbut}>Conheça a Coleção</button>
          </Link>
          <div className="mainban">
            <Image className={styles.mainban} src={mainbanner} alt="mb"></Image>
          </div>
        </div>
        <div className="box2">
          <div className={styles.subtitulo}>
            <p>Conheça Também</p>
          </div>
          <div className={styles.cardcolecao}>
            <div className={styles.esquerda}>
              <Image src={card_es_1} alt="ces1"></Image>
              <Image src={card_esq_2} alt="ces2"></Image>
            </div>
            <div className={styles.direita}>
              <Image className={styles.imdi} src={card_dir} alt="ces2"></Image>
            </div>
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.subtitulo}>
            <p>Produtos</p>
          </div>
            <div className={styles.gridContainer}>
              {products.map((prod, key) => (
                <div key={key} className={styles.outros_produtos}>
                  <div className={styles.img_prod}>
                    <Image src={prod.image[0]} className='card_img' alt="prod" width="360" height="360"></Image>
                  </div>
                  <div className={styles.inf_prod}>
                    <div className={styles.ti}>{prod.name}</div>
                    <div className={styles.precos}>
                      <div className={styles.prom}>R$ {prod.current_price}</div>
                      <div className={styles.antigo}>R$ {prod.old_price}</div>
                    </div>
                    <div>{prod.available_quantity} Itens em estoque</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p>
                <Link href="/produtos"><button className={styles.cbut}>Ver Mais</button></Link>
              </p>
            </div>
        </div>
      </div>
    </main>
  );
}
