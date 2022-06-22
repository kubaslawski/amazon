export const addToBasket = (productId: number, quantity: number) => {
    let basket = JSON.parse(localStorage.getItem('basket') || '[]');
    const productDetails = {
        'productId': productId,
        'quantity': quantity
    }
    const index = basket.findIndex((x: any) => x.productId === productDetails.productId);
    if(index > -1){
        let newBasket = [...basket];
        newBasket[index] = {
            ...basket[index],
            quantity: basket[index].quantity + quantity
        }
        localStorage.setItem('basket', JSON.stringify(newBasket));
    } else {
        let newBasket = [...basket, productDetails];
        localStorage.setItem('basket', JSON.stringify(newBasket));
    }
    window.dispatchEvent(new Event('storage'));
}