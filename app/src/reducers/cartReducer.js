const initialState = {
    isCheckedout: false,
    items: [],
    total: 0
}

export const totalCalculate = items => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export default function cart(state = initialState, action) {
    let item, items = [];

    if (action.item){
        item = state.items.find(item => item.tail === action.item.tail);
        items = [...state.items]
    }

    switch (action.type) {
        case "ADD_ITEM":

            if (!item) {
                action.item.quantity = 1;
                items.push({ ...action.item})
            } else {
                item.quantity++;
            }

            return {
                total: totalCalculate(items),
                items: items
            }

        case "REMOVE_ITEM":
            items = state.items.filter(item => item.tail !== action.item.tail)
            return {
                total: totalCalculate(items),
                items: items
            }

        case "INCREASE":
            item.quantity++;

            return {
                total: totalCalculate(items),
                items: items
            }

        case "DECREASE":

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                items = state.items.filter(item => item.tail !== action.item.tail)
            }

            return {
                total: totalCalculate(items),
                items: items
            }

        case "CHECKOUT":
            return {
                isCheckedout: true,
                total: 0,
                items: []
            }
            
        case "CLEAR":
                return {
                    isCheckedout: false,
                    total: 0,
                    items: []
                }
        default:
            return state
    }
};