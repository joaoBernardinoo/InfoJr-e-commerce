'use client';
import { useState, useContext, useEffect } from 'react';
import produtos from '../imagens/cards_produtos/card1.png';
import filter from '../imagens/filtro/filter_list.png';
import { Product } from '@/types/products';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ProductContext from '@/contexts/products';
import { filterProducts, otherProducts } from '@/utils/functions';
import { searchProducts } from '@/utils/functions';
import { FaSearch } from "react-icons/fa";

export default function Produtos() {
  const { products } = useContext(ProductContext);

  const [prodsFilter, setProdsFilter] = useState(products);
  const [word, setWord] = useState('');

  useEffect(() => {
    handleSearch();
  }, [word]); // Observa mudanças no estado 'word'

  function handleSearch() {
    const filtered = word ? searchProducts(products, word) : products;
    setProdsFilter(filtered);
  }

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsActive(state => !state);
  };

  return (
    <main>
      <div className={styles.box1}>
        <div className={styles.titulo}>
          <h1>Produtos</h1>
          <div className={styles.prod_barra}>
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
        </div>
        <div className={styles.box2}>
          <div className={styles.box3}>
            <div className={styles.l_esq}>
              <div className={styles.barraPesquisa}>
                <input
                  onChange={e => setWord(e.target.value)}
                  className={styles.campoPesquisa}
                  value={word}
                  placeholder="Pesquisar"
                ></input>
                {/*Tentar atualizar o filtro com o onChange no input*/}
                <button className={styles.botaoBusca} onClick={() => handleSearch()}><FaSearch /></button>
              </div>
              <h3>X itens encontrados</h3>
            </div>
            <div className={styles.l_dir}>
              { isActive ? (
                <>
                  <button className={styles.filtro_b} onClick={handleClick}>
                    <div>Filtros</div>
                    <div>
                      <Image src={filter} alt="fil"></Image>
                    </div>
                  </button>
                  <div className={styles.filtro}>
                    <div className={styles.listaCategorias}>
                      <ul style={{listStyle:'none'}}>
                        <h4>Categorias</h4>
                        <li className={styles.list_item}>
                          <input type="checkbox" />Camisetas
                        </li>
                        <li className={styles.list_item}>
                          <input type="checkbox" />Acessórios
                        </li>
                        <li className={styles.list_item}>
                          <input type="checkbox" />Calças
                        </li>
                        <li className={styles.list_item}>
                          <input type="checkbox" />Casacos
                        </li>
                        <li className={styles.list_item}>
                          <input type="checkbox" />Feminino
                        </li>
                        <li className={styles.list_item}>
                          <input type="checkbox" />Masculino
                        </li>
                      </ul>
                    </div>
                    <div className={styles.listaColecoes}>
                      <ul style={{listStyle:'none'}}>
                        <h4>Coleções</h4>
                        <li>
                          <input type="checkbox" />Keith Haring & Blvck
                        </li>
                        <li>
                          <input type="checkbox" />Fortnite & Blvck
                        </li>
                        <li>
                          <input type="checkbox" />Mohair
                        </li>
                        <li>
                          <input type="checkbox" />Camisetas
                        </li>
                        <li>
                          <input type="checkbox" />Whte
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button className={styles.filtro_b} onClick={handleClick}>
                    <div>Filtros</div>
                    <div>
                      <Image src={filter} alt="fil"></Image>
                    </div>
                  </button>
                </>
              )}
              <div className={styles.tags}>
                <h3>tag 1</h3>
                <h3>tag 2</h3>
              </div>
            </div>
          </div>
          <div className={styles.produtos}>
            {prodsFilter.map((prod, key) => (
              <div key={key} className={styles.card_produtos}>
                <div className={styles.card_img}>
                  <Image
                    src={prod.image[0]}
                    className={styles.card_img}
                    alt="prod"
                    width={165}
                    height={165}
                  ></Image>
                </div>
                <div className={styles.informacoes}>
                  <h2>{prod.name}</h2>
                  <div className={styles.precos}>
                    <div className={styles.current_price}>
                      R$ {prod.current_price}
                    </div>
                    <div className={styles.old_price}>R$ {prod.old_price}</div>
                  </div>
                  <p className={styles.disponivel}>
                    {prod.available_quantity} itens em estoque
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.editar}>
          <Link
            href="/edicao"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <div>Editar</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
