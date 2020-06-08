const registration = (state = false, action) => { // state for redirection after successful registration or login
    switch (action.type) {
        case "REGISTRATION":
            if (action.user.name && action.user.surname &&
                action.user.address && action.user.phone &&
                action.user.password && action.user.username) {
                action.user.orders = [];
                let users = JSON.parse(localStorage.getItem("users"));
                if (users) {
                    for (let user of users) {
                        if (action.user.username == user.username) {
                            alert("User with the same username is already exist!");
                            return false;
                        }
                    }
                    users.push(action.user);
                } else {
                    users = [action.user];
                }
                localStorage.setItem("users", JSON.stringify(users));
                alert(`User ${action.user.name} ${action.user.surname} is successfuly registered!`);
                return true;
            }
            alert(`Please, fill every field on this page!`);
            return state;
        case "REGISTRATION_DEFAULT":
            return false;
        case "LOGIN":
            const users = JSON.parse(localStorage.getItem("users"));
            if (users) {
                for (let user of users) {
                    if (user.username === action.data.username && user.password === action.data.password) {
                        return true;
                    }
                }
            }
            return false;
        case "LOGIN_DEFAULT":
            return false;
        default:
            return state;
    }
}

export default registration;