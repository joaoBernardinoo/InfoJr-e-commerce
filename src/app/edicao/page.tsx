"use client"
import carrinho from "../imagens/shopping_cart.png"
import favoritos from "../imagens/favorite_border.png"
import perfil from "../imagens/person_outline.png"
import produtos from '../imagens/cards_produtos/card1.png';


import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Placeholder } from "react-bootstrap";

export default function Edicao() {

    const [prods, setProds] = useState([
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
      ]);
    
    function remove(id: number) {
        setProds(prods.filter(prod => prod.id !== id));
    }

    return (
        <main>
            <div className={styles.box1}>
                <div className={styles.titulo}><h1>Edição</h1></div>
                <div className={styles.barra}>
                    <div className={styles.lad_esq}>
                        <div className={styles.cima}>
                            <div>Criar Produto</div>
                            <div><Placeholder>Pesquisar</Placeholder></div>
                        </div>
                        <div>x itens encontrados</div>
                    </div>
                    <div className={styles.lad_dir}>
                        <div>Filtros</div>
                        <div className={styles.baixo}>
                            <div>tag 1</div>
                            <div>tag 2</div>
                        </div>
                    </div>
                </div>
                {prods.map((prod) => (
                    <div className={styles.gridContainer}>
                        <div key={prod.id} className={styles.outros_produtos}>
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
                    </div>
                ))}
            </div>
        </main>
    )
}