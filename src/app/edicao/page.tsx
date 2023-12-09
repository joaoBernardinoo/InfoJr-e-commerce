'use client';

import styles from './page.module.css';
import Image from 'next/image';
import EditProductPopup from '@/components/productModal';
import { useState, useContext } from 'react';
import { Product } from '@/types/products';
import ProductContext from '@/contexts/products';
import { updateProductsArray } from '@/utils/functions';

export default function Edicao() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // use context do react para passar os produtos para o carrinho
  const { products} = useContext(ProductContext);
  const [ visibleProducts, setVisibleProducts ] = useState(products);

  const [activeProduct, setActiveProduct] = useState(products[0]);
  function edit(prod: Product) {
    setActiveProduct(prod);
    setIsModalVisible(true);
  }
  function remove(id: number) {
    updateProductsArray(products, id);
    console.log('removi');
  }
  function save(editedProduct: Product) {
    products.map((prod) => (prod.id === editedProduct.id ? editedProduct : prod));
  }

  return (
    <main>
      {isModalVisible ? (
        <EditProductPopup
          product={activeProduct}
          onClose={() => {
            setIsModalVisible(false);
          }}
          onSave={() => {}}
        />
      ) : null}
      {products.map((prod) => (
        <div key={prod.id} className={styles.outros_produtos}>
          <Image
            src={prod.image[0]}
            className={styles.card_img}
            width={165}
            height={165}
            alt="prod"
          ></Image>
          <div>
            <h2>{prod.name}</h2>
            <p>{prod.current_price}</p>
            <p>{prod.old_price}</p>
            <p>Quantidade {prod.available_quantity}</p>
          </div>
          <button
            onClick={() => {
              edit(prod);
            }}
          >
            Editar
          </button>
          <button onClick={() => remove(prod.id)}>Remover</button>
        </div>
      ))}
    </main>
  );
}
