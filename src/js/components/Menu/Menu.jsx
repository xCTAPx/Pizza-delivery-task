import React from 'react';
import './menu.scss';
import MenuItem from '../../containers/MenuItem';
import PropTypes from 'prop-types';

const Menu = ({ products, filter, changeFilter }) => {

    let classList = "menu__filter__btn";

    return (
        <div className="menu-border">
            <div className="menu__filter">
                {filter === "all" ? <button className="menu__filter__btn active" onClick={() => changeFilter("all")}>All</button> :
                    <button className="menu__filter__btn" onClick={() => changeFilter("all")}>All</button>}
                {filter === "pizza" ? <button className="menu__filter__btn active" onClick={() => changeFilter("pizza")}>Pizza</button> :
                    <button className="menu__filter__btn" onClick={() => changeFilter("pizza")}>Pizza</button>}
                {filter === "drinks" ? <button className="menu__filter__btn active" onClick={() => changeFilter("drinks")}>Drinks</button> :
                    <button className="menu__filter__btn" onClick={() => changeFilter("drinks")}>Drinks</button>}
            </div>
            <div className="menu">
                {filter === "all" ? products.map(product => <MenuItem product={product} key={product.id} />) :
                    products.filter(product => product.category === filter)
                        .map(product => <MenuItem product={product} key={product.id} />)}
            </div>
        </div>
    )
}

Menu.propTypes = {
    products: PropTypes.arrayOf(Object).isRequired,
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
}

export default Menu;