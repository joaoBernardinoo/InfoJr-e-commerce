import { Product } from '@/types/products';

export function otherProducts(prods: Product[]) {
  var otherProds = prods.slice(0, 6);
  return otherProds;
}

export function filterProducts(prods: Product[], tags: string[]) {
  var similarProds = prods.filter((product: Product) =>
    tags.every((tag: string) => {
      product.tags.includes(tag);
    })
  );
  return similarProds;
}

export function searchProducts(prods: Product[], name: string) {
  var searchProds = prods.filter((product: Product) => product.name.includes(name));
  return searchProds;
}

export function recentProducts(recentProducts: Product[], prod: Product) {
  recentProducts.shift();
  recentProducts.push(prod);
}

// Carrinho

export function addCart(prodsCart: Product[], prodAdd: Product) {
  prodsCart.push(prodAdd);
}

export function removeCart(prodsCart: Product[], prodId: number) {
  prodsCart = prodsCart.filter((prodCart: Product) => prodCart.id != prodId);
}

export function clearCart(prodsCart: Product[]) {
  prodsCart.length = 0;
}

export function updateProductsArray(products: Product[], id: number) {
  const newProducts = products.filter((prod) => prod.id !== id);
  console.log(products);
  if (newProducts.length == 0) return;
  products.length = 0;
  for (let i = 0; i < newProducts.length; i++) {
    products.push(newProducts[i]);
  }
  console.log(products);
}
