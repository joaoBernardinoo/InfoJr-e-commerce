import carrinho from '../imagens/shopping_cart.png';
import favoritos from '../imagens/favorite_border.png';
import perfil from '../imagens/person_outline.png';
import produtos from '../imagens/cards_produtos/productCards.png';
import filter from '../imagens/filtro/filter_list.png';

import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Produtos() {
  return (
    <main>
      <div className={styles.box1}>
        <div className={styles.titulo}>
          <h1>Produtos</h1>
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
              <div className={styles.filtro}>
                <button className={styles.filtro_b}>
                  <h3>
                    Filtros <Image src={filter} alt="fil"></Image>
                  </h3>
                </button>
              </div>
              <div className={styles.tags}>
                <h3>tag 1</h3>
                <h3>tag 2</h3>
              </div>
            </div>
          </div>
          <div className={styles.produtos}>
            <Image src={produtos} alt="prod"></Image>
            <Image src={produtos} alt="prod"></Image>
            <Image src={produtos} alt="prod"></Image>
          </div>
          <div className={styles.produtos}>
            <Image src={produtos} alt="prod"></Image>
            <Image src={produtos} alt="prod"></Image>
            <Image src={produtos} alt="prod"></Image>
          </div>
          <div className={styles.produtos}>
            <Image src={produtos} alt="prod"></Image>
            <Image src={produtos} alt="prod"></Image>
            <Image src={produtos} alt="prod"></Image>
          </div>
        </div>
        <div className={styles.editar}>
          <Link href="/edicao">
            <h1>Editar</h1>
          </Link>
        </div>
      </div>      
    </main>
  );
}
