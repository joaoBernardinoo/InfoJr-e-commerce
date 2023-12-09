import { Product } from '@/types/products';

export function otherProducts(prods: []){
    var otherProds = prods.slice(0, 6)
    return otherProds
}

export function filterProducts(prods: Product[], tags: string[]){
    var similarProds = prods.filter((product: Product) => tags.every((tag: string) => {product.tags.includes(tag)}));
    return similarProds
}

export function searchProducts(prods: Product[], name: string){
    var searchProds = prods.filter((product: Product) => name.includes(product.name));
    return searchProds
}

export function recentProducts(recentProducts: Product[], prod: Product){
    recentProducts.shift()
    recentProducts.push(prod)
}

// Carrinho

export function addCart(prodsCart: Product[], prodAdd: Product) {
    prodsCart.push(prodAdd)
}

export function removeCart(prodsCart: Product[], prodId: number){
    prodsCart = prodsCart.filter((prodCart: Product) => prodCart.id != prodId)
}

export function clearCart(prodsCart: Product[]){
    prodsCart.length = 0
}

