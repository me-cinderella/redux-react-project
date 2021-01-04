export function increaseItemInCart(item) {
    return {
        type: 'INCREASE',
        item: item
    };
}

export function decreaseItemInCart(item) {
    return {
        type: 'DECREASE',
        item: item
    };
}

export function addToCart(item) {
    return {
        type: 'ADD_ITEM',
        item: item
    };
}

export function removeFromCart(item) {
    return {
        type: 'REMOVE_ITEM',
        item: item
    };
}

export function clearCart() {
    return {
        type: 'CLEAR'
    };
}

export function checkout() { 
    return {
        type: 'CHECKOUT'
    };
}

export function clear() { 
    return {
        type: 'CLEAR'
    };
}