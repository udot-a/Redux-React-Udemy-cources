import React from "react";
import {decGoods, delGoods, incGoods} from "../../actions";
import {connect} from "react-redux";

const CartPage = ({ items, total, incGoods, decGoods, delGoods }) => {
    const renderRow = (item, idx) => {
        const { id, name, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => delGoods(id)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => incGoods(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => decGoods(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        );
    };

    if (!items.length) {
        return (
            <h3>No goods in your cart...</h3>
        );
    }
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                { items.map(renderRow) }
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartState: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    incGoods,
    decGoods,
    delGoods
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);