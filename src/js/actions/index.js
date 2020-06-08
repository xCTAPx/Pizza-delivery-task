export const fetchProducts = () => async dispatch => {
    let response = await fetch('products.json');
    if (response.ok) {
        let data = await response.json();
        dispatch(productsFetch(data));
    } else {
        throw new Error("Fetching error: " + error);
    }
}

export const productsFetch = payload => ({
    type: "PRODUCTS_FETCH",
    payload
})

export const filterToggle = filter => ({
    type: "FILTER_TOGGLE",
    filter
})

export const orderAdd = payload => ({
    type: "ORDER_ADD",
    payload
})

export const quantityChange = (id, oper) => {
    if (oper === "+") {
        return {
            type: "QUANTITY_INCREASE",
            id
        }
    } else if (oper === "-") {
        return {
            type: "QUANTITY_DECREASE",
            id
        }
    } else {
        return {
            type: "QUANTITY_DELETE",
            id
        }
    }
}

export const orderConfirm = order => ({
    type: "ORDER_CONFIRM",
    order
})

export const checkout = data => ({
    type: "CHECKOUT",
    data
})

export const handleRegistration = user => ({
    type: "REGISTRATION",
    user
})

export const registeredDefault = () => ({
    type: "REGISTRATION_DEFAULT"
})

export const loginedDefault = () => ({
    type: "LOGIN_DEFAULT"
})

export const handleLogin = data => ({
    type: "LOGIN",
    data
})

export const logOut = user => ({
    type: "LOGOUT",
    user
})