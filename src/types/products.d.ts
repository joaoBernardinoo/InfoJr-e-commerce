import { StaticImageData } from "next/image";

export interface Product {
    id: number,
    name: string,
    current_price: float,
    old_price: float,
    available_quantity: int,
    size: string[],
    product_description: string,
    tags: string[],
    image: StaticImageData[],
}

export type ProductResponse = {
    name: string,
    current_price: float,
    old_price: float,
    available_quantity: int,
}