export type productType ={
    id: number;
    name: string;
    slug: string;
    currency_price: string;
    cover: string;
    flash_sale: boolean;
    is_offer: boolean;
    discounted_price: string;
    rating_star?: null | string;
    rating_star_count: number;
    wishlist: boolean;
}
export type WishlistItem = {
    id: string | number;
    name: string;
    price: number;
    image?: string;
}