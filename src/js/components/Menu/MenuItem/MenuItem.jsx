import React from 'react';
import './menu-item.scss';
import PropTypes from 'prop-types';

const MenuItem = ({ product, addToOrder, changeQuantity, rerender }) => (
    <div className="menu__item">
        <img className="menu__item__img" src={product.imgUrl} alt="Pizza" />
        <h4 className="menu__item__title">{product.name}</h4>
        <p className="menu__item__description">{product.description}</p>
        <div className="menu__item__order">
            <p className="menu__item__order__price">Price: {product.priceDollars}$</p>
            <div className="quantity-div">
                <p className="quantity-btn" onClick={() => changeQuantity(product.id, "+")}>▲</p>
                <p className="quantity">{product.quantity}</p>
                <p className="quantity-btn" onClick={() => changeQuantity(product.id, "-")}>▼</p>
            </div>
            <button className="menu__item__order__btn" onClick={() => addToOrder(product)}>Order</button>
        </div>
    </div >
)

MenuItem.propTypes = {
    product: PropTypes.object.isRequired,
    addToOrder: PropTypes.func.isRequired,
    changeQuantity: PropTypes.func.isRequired,
    rerender: PropTypes.bool.isRequired // for rerender when component gets new quantity
}

export default MenuItem;