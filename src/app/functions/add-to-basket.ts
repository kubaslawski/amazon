import {IProduct} from "../../interfaces/products";

export const addToBasket = (product: IProduct, quantity: number) => {
    let basket = JSON.parse(localStorage.getItem('basket') || '[]');
    interface IProductBasket {
        product: IProduct;
        quantity: number;
    }
    const productBasket: IProductBasket = {
        'product': product,
        'quantity': quantity
    }
    const index = basket.findIndex((x: IProductBasket) => x.product.id === productBasket.product.id);
    if(index > -1){
        let newBasket = [...basket];
        newBasket[index] = {
            ...basket[index],
            quantity: basket[index].quantity + quantity
        }
        localStorage.setItem('basket', JSON.stringify(newBasket));
    } else {
        let newBasket = [...basket, productBasket];
        localStorage.setItem('basket', JSON.stringify(newBasket));
    }
    window.dispatchEvent(new Event('storage'));
}