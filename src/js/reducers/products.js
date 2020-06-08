const products = (state = [], action) => {
    switch (action.type) {
        case "PRODUCTS_FETCH":
            for (let item of action.payload) {
                item.quantity = 1;
            }
            return action.payload;
        case "QUANTITY_INCREASE":
            state.find(product => product.id === action.id).quantity += 1;
            return state;
        case "QUANTITY_DECREASE":
            if (state.find(product => product.id === action.id).quantity > 1) {
                state.find(product => product.id === action.id).quantity -= 1;
            }
            return state;
        case "CHECKOUT":
            for (let item of state) {
                item.quantity = 1;
            }
            return state;
        default:
            return state;
    }
}

export default products;