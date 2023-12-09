'use client';

import { MdOutlineShoppingCart } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiTrash } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

import style from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

import produtos from '../imagens/cards_produtos/card1.png';
import ProductContext from '@/contexts/products';
import { ProductImage } from '@/enums/product_images';
import { useContext } from 'react';



const produto = [
  {
    id: 1,
    name: 'Blvck Mohair Branded Sweater HOMEPAGE',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Mohair1, ProductImage.Mohair2, ProductImage.Mohair3],
  },
  {
    id: 2,
    name: 'Blvck Evil Twin Teddy Bear Hoodie',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Evil1, ProductImage.Evil2],
  },
  {
    id: 3,
    name: "'Blvck x Keith Haring' Heart Cardigan",
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Keith1],
  },
  {
    id: 4,
    name: "'Blvck x Keith Haring' Heart Cardigan",
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Haring1],
  },
  {
    id: 5,
    name: 'Blvck Blazer Dress',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Blazer1],
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
    image: [ProductImage.Bandana1],
  },
];

export default function Carrinho() {
  const { products, cart, setCart, recent } = useContext(ProductContext);
  // deve tirar dps
  if (cart.length == 0) setCart(produto);
  
  function deleteCart(id: number) {
    const newCart = cart.filter((prod) => prod.id !== id);
    setCart(newCart);
  }

  const totalValue = cart.reduce((accumulator, product) => {
    return accumulator + product.current_price;
  }, 0);

  function clearCart(){
    setCart([]);
  }

  return (
    <main>
      {cart.length == 0 ? (
        <div className={style.principal}>
          <h1 className={style.titulo}>Seu Carrinho</h1>
          <MdOutlineShoppingCart
            style={{ width: '60px', height: '60px', color: 'grey' }}
          />
          <p className={style.carVazio}>Seu carrinho está vazio</p>
          <p className={style.letrasPeq}>
            Adicione novos itens ao carrinho antes de prosseguir para o
            pagamento!
          </p>
          <button className={style.botao}>
            <Link
              href={'/produtos'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Continuar Comprando
            </Link>
          </button>
        </div>
      ) : (
        <div className={style.principal}>
          <h1 className={style.titulo}>Seu Carrinho</h1>
          <div className={style.barraCarrinho}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="257"
              height="14"
              viewBox="0 0 257 14"
              fill="none"
            >
              <path d="M0 0H257V14H0V0Z" fill="#D1D1D1" />
            </svg>
          </div>
          <div className={style.areaPagina}>
            <div className={style.infoProdutos}>
              {cart.map((prod, key) => (
                <div key={key} className={style.card_produtos}>
                  <div className={style.atribsProduto}>
                    <div className={style.imgBox}>
                      <Image
                        alt={''}
                        src={prod.image[0]}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className={style.infoCard}>
                      <h3 className={style.nomeProd}>{prod.name}</h3>
                      <div className={style.precos}>
                        <span className={style.currentPrice}>
                          R$ {prod.current_price}
                        </span>
                        <span className={style.oldPrice}>
                          R$ {prod.old_price}
                        </span>
                      </div>
                      <p className={style.qtdRestante}>
                        {prod.available_quantity} Itens em estoque
                      </p>
                      <div className={style.qtdTamanho}>
                        <div className={style.quantidade}>
                          <p>Quantidade</p>
                          {/* dropdown */}
                        </div>
                        <div className={style.tamanho}>
                          <p>Tamanho</p>
                          {/* dropdown */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.botoes}>
                    <>
                      <button className={style.botao}>
                        <MdFavoriteBorder />
                      </button>
                    </>
                    <>
                      <button
                      onClick={() => deleteCart(prod.id)}
                      className={style.botao}
                      >
                        <FiTrash />
                      </button>
                    </>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.infoCompra}>
              <div className={style.totalEFrete}>
                <div className={style.valorCompra}>
                  <div className={style.subtotal}>Subtotal</div>
                  <div className={style.valorSubtotal}>R$ {totalValue},00</div>
                </div>            
                <div className={style.botaoComprar}>
                  <button className={style.comprarAgora}>Comprar Agora</button>
                </div>
                <div className={style.frete}>
                  <p className={style.calcFrete}>Calcular Frete</p>
                  <div className={style.freteInput}>
                    <input className={style.freteTexto} type='text' placeholder='Informe o CEP' />
                    <button className={style.freteBtn}>
                      <FaArrowRight />
                    </button>
                  </div>
                  <p className={style.msgRodape}>Preço de frete para Salvador, Bahia: R$ {products[0].current_price}</p>
                </div>
              </div>
              <div className={style.botoesCarrinho}>
                <button className={style.botaoContinuar}>Continuar Comprando</button>
                <button onClick={() => clearCart()} className={style.botaoLimpar}>Limpar Carrinho</button>
              </div>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}
