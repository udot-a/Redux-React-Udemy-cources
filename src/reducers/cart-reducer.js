import { v4 as uuidv4 } from "uuid";

class Cart {
    constructor(name, price, count, id=uuidv4()) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
    }

    get total() {
        return this.count * this.price;
    }

}

const initialState = {
    cartItems: [
        new Cart("Book 1", 50, 3 ),
        new Cart("Book 2", 30, 4 ),
        new Cart("Book 3", 25, 4 ),
    ],
    get orderTotal() { return this.cartItems.reduce((sum, {total}) => sum + total, 0)}
}

const mapBookFields = (arr, obj) => {
    const {id, title, price} = obj;

    if (arr.some(item => item.id ===id)) {
        return arr.map(item => {
            if (item.id === id) {
                item.count++;
            }
            return item;
        })
    } else {
        return [...arr, new Cart(title, price, 1, id )]
    }
}

const incDec = (arr, id,  sign) => arr.map(item => {
    if (item.id === id) {
        item.count += sign;
        if (item.count === 0) {
           return null;
        }
    }
    return item;
}).filter(i => i!==null);


const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                cartItems: mapBookFields(state.cartItems, action.payload),
                get orderTotal() { return this.cartItems.reduce((sum, {total}) => sum + total, 0)}
            }

        case "INC_GOODS":
            return {
                cartItems: incDec(state.cartItems, action.payload,  1),
                get orderTotal() { return this.cartItems.reduce((sum, {total}) => sum + total, 0)}
            }

        case "DEC_GOODS":
            return {
                cartItems: incDec(state.cartItems, action.payload, -1),
                get orderTotal() { return this.cartItems.reduce((sum, {total}) => sum + total, 0)}
            }

        case "DEL_GOODS":
            return {
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
                get orderTotal() { return this.cartItems.reduce((sum, {total}) => sum + total, 0)}
            }

        default:
            return state;
    }
}

export default cartReducer;