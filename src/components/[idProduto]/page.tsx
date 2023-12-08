import prodImg from '@/app/imagens/cards_produtos/productImageSample.png'
import React from 'react'

import Image from 'next/image';

interface Produto {
  id: number,
  imagens: string[],
  nome: string,
  valorComum: number,
  valorPromocional: number,
  estoque: number,
  favorito: boolean,
}



const CardProduto = (elemento: Produto) => (
    <div>
        <Image src={prodImg} alt='Imagem do produto'/>
        <h6>{elemento.nome}</h6>
        <span>{elemento.valorComum}</span><span>{elemento.valorPromocional}</span>
    </div>
)

export default CardProduto