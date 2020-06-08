const user = (state = null, action) => {
    switch (action.type) {
        case "LOGIN":
            const users = JSON.parse(localStorage.getItem("users"));
            if (users) {
                for (let user of users) {
                    if (user.username === action.data.username && user.password === action.data.password) {
                        const currentUser = {
                            username: user.username,
                            name: user.name,
                            surname: user.surname,
                            phone: user.phone,
                            orders: user.orders
                        }
                        localStorage.setItem("user", JSON.stringify(currentUser));
                        return currentUser;
                    }
                }
            }
            alert(`User with such username or password does not exist!`);
            return state;
        case "LOGOUT":
            const existUsers = JSON.parse(localStorage.getItem("users"));
            for (let user of existUsers) {
                if (action.user.username === user.username) {
                    user.orders = action.user.orders;
                }
            }
            localStorage.setItem("users", JSON.stringify(existUsers));
            localStorage.setItem("user", JSON.stringify(null));
            return null;
        case "PRODUCTS_FETCH":
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                return user;
            } else {
                return null;
            }
            case "CHECKOUT":
                if (action.data.user) {
                    return {
                        username: action.data.user.username,
                        name: action.data.user.name,
                        surname: action.data.user.surname,
                        phone: action.data.user.phone,
                        orders: [
                            ...action.data.user.orders,
                            {
                                products: action.data.order,
                                date: action.data.date,
                                bill: action.data.bill,
                                address: action.data.address
                            }
                        ]
                    }
                }
                default:
                    return state;
    }
}

export default user;