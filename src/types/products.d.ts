export type Product = {
    name: string,
    current_price: float,
    old_price: float,
    available_quantity: int,
    size: string,
    product_description: string,
    tags: string
}

export type ProductResponse = {
    name: string,
    current_price: float,
    old_price: float,
    available_quantity: int,
}