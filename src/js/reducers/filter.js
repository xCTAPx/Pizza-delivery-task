const products = (state = "all", action) => {
    switch (action.type) {
        case "FILTER_TOGGLE":
            return action.filter;
        default:
            return state;
    }
}

export default products;