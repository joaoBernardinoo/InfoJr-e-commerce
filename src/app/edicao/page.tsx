"use client"
import carrinho from "../imagens/shopping_cart.png"
import favoritos from "../imagens/favorite_border.png"
import perfil from "../imagens/person_outline.png"
import produtos from '../imagens/cards_produtos/card1.png';


import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

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
        {/*Joga todos os produtos na tela*/}
        {prods.map((prod) => (
            <div key={prod.id} className={styles.outros_produtos}>
              <Image src={prod.image[0]} className='card-img' alt="prod"></Image>
              <h2>{prod.name}</h2>
              <p>{prod.current_price}</p>
              <p>{prod.old_price}</p>
              <p>Quantidade {prod.available_quantity}</p>
              <button onClick={() => remove(prod.id)}>Remover</button>
            </div>
        ))}

    
        </main>

    )
}