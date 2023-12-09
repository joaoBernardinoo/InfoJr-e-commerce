'use client';
import mainbanner from './imagens/mainBanner.png';

import card_es_1 from './imagens/cards_coleção/promocoes.png';
import card_esq_2 from './imagens/cards_coleção/perfume.png';
import card_dir from './imagens/cards_coleção/whte.png';

import produtos from './imagens/cards_produtos/card1.png';
import ProductContext from '@/contexts/products';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';

function debugFunction() {
  console.log('debug');
}
if (typeof window !== 'undefined') {
  (window as any).debugFunction = debugFunction;
}

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

  function updateProducts() {
    if (products.length > 0) return;
    for (let i = 0; i < produto.length; i++) {
      products.push(produto[i]);
    }
  }
  updateProducts();

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
              <Image className={styles.imesq} src={card_es_1} alt="ces1"></Image>
              <Image className={styles.imesq} src={card_esq_2} alt="ces2"></Image>

            </div>
            <div className={styles.direita}>
              <Image className={styles.imdi} src={card_dir} alt="ces2"></Image>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className={styles.subtitulo}>
            <p>Produtos</p>
            <div className={styles.produtos}>
              {/*Joga todos os produtos na tela*/}
              {products.map((prod, key) => (
                <div key={key} className={styles.card_produtos}>
                  <div className={styles.card_img}>
                    <Image src={prod.image[0]} className={styles.card_img} alt="prod" width={165} height={165}></Image>
                  </div>
                  <div className={styles.informacoes}>
                    <h2>{prod.name}</h2>
                    <div className={styles.precos}>
                      <p className={styles.current_price}>R$ {prod.current_price}</p>
                      <p className={styles.old_price}>R$ {prod.old_price}</p>
                    </div>
                    <p className={styles.disponivel}>{prod.available_quantity} itens em estoque</p>
                  </div>                  
                </div>
              ))}
            </div>

            <div className={styles.subtitulo}>
              <p>
                <button className={styles.cbut}>Ver Mais</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
