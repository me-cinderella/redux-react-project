const initialState = {
    products: [],
    error: ''
}

export default function fetch(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_BEGIN':
            return state;
        case 'FETCH_SUCCESS':
            let products = action.payload;
            products.map(item => item.price = Math.floor(Math.random()*(10000-1000+1)+1000))
            return { ...state, products };
        case 'FETCH_FAILURE':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
