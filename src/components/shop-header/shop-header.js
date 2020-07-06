import React from 'react';
import './shop-header.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const ShopHeader = ({ cartItems, orderTotal }) => {
    const numItems = cartItems.reduce((sum, {count}) => sum + count, 0);

    return (
        <header className="shop-header row">
            <Link to={"/"}>
                <div className="logo text-dark" >ReStore</div>
            </Link>

            <Link to={"/cart"}>
                <div className="shopping-cart" >
                    <i className="cart-icon fa fa-shopping-cart" />
                    {numItems} items (${orderTotal})
                </div>
            </Link>
        </header>
    );
};
const mapStateToProps = ({cartState: {cartItems, orderTotal}}) => ({
   cartItems,
   orderTotal
});
export default connect(mapStateToProps)(ShopHeader);