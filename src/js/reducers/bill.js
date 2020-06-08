const bill = (state = 0, action) => {
    switch (action.type) {
        case "ORDER_CONFIRM":
            return action.order.bill;
        default:
            return state;
    }
}

export default bill;