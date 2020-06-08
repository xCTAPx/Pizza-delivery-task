const rerender = (state = false, action) => {
    switch (action.type) {
        case "QUANTITY_INCREASE":
            return !state;
        case "QUANTITY_DECREASE":
            return !state;
        case "QUANTITY_DELETE":
            return !state;
        default:
            return state;
    }
}

export default rerender;