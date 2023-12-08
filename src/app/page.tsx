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
              <Image
                src={
                  'https://s3-alpha-sig.figma.com/img/2a20/2130/57540671b680b59978fa9ae6e8ae1c27?Expires=1702857600&Signature=Kxpso7hCm66LMQA-6~lrxnkWWWSlApLemGKaccoBAhVGOBwZOSpnXtFO16vaTkWXU7WkyD-FXs5mZAxe1aihv4vhUCFQuOty1iY9Bb~Rtm89GK3A1zspLN3dMLVP~xhCPI8ZHpw4Ivd7OYw7yVL0M79Cc4lLrgXW22nDokneEIBfWo67LrK5LhqnThwsF5XKPA08kBbPQ7VRwwWVYn6Xwlv23tZHdTdekE0o~pBQfyBFbePbzdJkNbMQS-TSThqdmRSAi7Zj5uJ500YaK-9vgtZroUjB247TOEvSPqBuPQ817r8qoTex0749-JyiN0nk3IJ1jCe8C39oxgRhfMmXOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                }
                width={892}
                height={495}
                alt="ces1"
              ></Image>
              <Image src={card_esq_2}  alt="ces2"></Image>
            </div>
            <div className={styles.direita}>
              <Image className={styles.imdi} src={card_dir} alt="ces2"></Image>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className={styles.subtitulo}>
            <p>Produtos</p>
            {/*Joga todos os produtos na tela*/}
            {products.map((prod, key) => (
              <div key={key} className={styles.outros_produtos}>
                <Image
                  src={prod.image[0]}
                  width={892}
                  height={495}
                  className={styles.card_img}
                  alt="prod"
                ></Image>
                <h2>{prod.name}</h2>
                <p>{prod.current_price}</p>
                <p>{prod.old_price}</p>
                <p>Quantidade {prod.available_quantity}</p>
              </div>
            ))}
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
