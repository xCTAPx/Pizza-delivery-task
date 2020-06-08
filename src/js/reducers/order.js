const order = (state = [], action) => {
    switch (action.type) {
        case "ORDER_ADD":
            alert(`You successfuly added product(s) to your order.
For more information and confirmation check "Your order" page.`)
            const newProduct = action.payload;
            if (state.length) {
                for (let item of state) {
                    if (item.id === newProduct.id) {
                        item.quantity++;
                    }
                }
            }
            return [...state, newProduct];
        case "ORDER_CONFIRM":
            return action.order.products;
        case "QUANTITY_DELETE":
            state.find(product => product.id === action.id).quantity = 1;
            return state.filter(product => product.id !== action.id);
        case "CHECKOUT":
            if (action.data.name && action.data.surname &&
                action.data.phone && action.data.address) {
                alert("Your order is accepted!");
                return [];
            } else {
                alert("Please, fill every field on this page!");
                return state;
            }
            default:
                return state;
    }
}

export default order;