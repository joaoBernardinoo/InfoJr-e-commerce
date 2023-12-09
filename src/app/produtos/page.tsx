"use client"
import { useState } from 'react';
import produtos from '../imagens/cards_produtos/card1.png';
import filter from '../imagens/filtro/filter_list.png';
import { Product } from '@/types/products';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { filterProducts } from '@/utils/functions';
import { searchProducts } from '@/utils/functions';

export default function Produtos() {

  const [prods, setProds] = useState<Product[]>([
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
      name: 'Teste 2',
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
      name: 'Teste 3',
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
  ]);
  return (
    <main>
      <div className={styles.box1}>
        <div className={styles.titulo}>
          <h1>Produtos</h1>
          <div className={styles.prod_barra}>
          <svg xmlns="http://www.w3.org/2000/svg" width="257" height="14" viewBox="0 0 257 14" fill="none">
            <path d="M0 0H257V14H0V0Z" fill="#D1D1D1"/>
          </svg>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.box3}>
            <div className={styles.l_esq}>
              <input
                className={styles.pesquisar}
                placeholder="Pesquisar"
              ></input>
              <h3>X itens encontrados</h3>
            </div>
            <div className={styles.l_dir}>
                <button className={styles.filtro_b}>
                  <div>Filtros</div> 
                  <div><Image src={filter} alt="fil"></Image></div>
                </button>
              <div className={styles.filtro}>
              </div>
              <div className={styles.tags}>
                <h3>tag 1</h3>
                <h3>tag 2</h3>
              </div>
            </div>
          </div>
          <div className={styles.produtos}>
          {/*Joga todos os produtos na tela*/}
          {searchProducts(prods, 'Teste').map((prod, key) => (
            <div key={key} className={styles.card_produtos}>
              <div className={styles.card_img}>
                <Image src={prod.image[0]} className={styles.card_img} alt="prod" width={165} height={165}></Image>
              </div>
              <div className={styles.informacoes}>
                <h2>{prod.name}</h2>
                <div className={styles.precos}>
                  <div className={styles.current_price}>R$ {prod.current_price}</div>
                  <div className={styles.old_price}>R$ {prod.old_price}</div>
                </div>
                <p className={styles.disponivel}>{prod.available_quantity} itens em estoque</p>
              </div>                  
            </div>
          ))}
        </div>
        </div>
        <div className={styles.editar}>
          <Link href="/edicao">
            <div>Editar</div>
          </Link>
        </div>
      </div>
    </main>
  );            
}
