/*
    Contains global cart information for the app as well as provides an API for modifying it.
*/
import { createContext } from 'react'

// Retrieve persistent copy, failing that initialize the default.
const GetInitialCart = () => {
    const TryItem = localStorage.getItem("Cart");
    return TryItem ? JSON.parse(TryItem) : {
        items: [],
    }
}

// Use with useEffect hook to keep cart changes persistent.
const SaveCart = (cart) => {
    localStorage.setItem("Cart", JSON.stringify(cart));
}

const CartContext = createContext(GetInitialCart())

function CartReducer(state, action) {
    const idMatch = (el) => el.id === action.payload.id;
    const foundItem = () => state.items.find(idMatch);

    const addItem = () => state.items
                                .map(el => idMatch(el) ? {...el, quantity: el.quantity + action.payload.quantity} : el);
    
    const appendItem = () => [...state.items, {...action.payload}];

    const subItem = () => state.items
                                .filter(el => !idMatch(el) || el.quantity > 1)
                                .map(el => idMatch(el) ? {...el, quantity: el.quantity - 1} : el);

    const AddAction = () => foundItem() ? addItem() : appendItem();
    const RemoveAction = () => foundItem() ? subItem() : {...state.items}
    const ClearItem = () => state.items.filter((el) => !idMatch(el));

    switch (action.type) {
        case 'add': return {...state, items: AddAction().sort()};
        case 'remove': return {...state, items: RemoveAction()};
        case 'clear': return {...state, items: ClearItem()};
        case 'empty': return {...state, items: []};
        default:
            // log error silently
            console.log("Reducer Action Invalid");
            return {...state}
    }
}

const CartContextAPI = {
    // Use with useEffect hook to keep cart changes persistent.
    save: SaveCart,

    // React Reducer, supports the following actions...
    // "add" {...item, item.quanitity}      -- tracks that quantity adding to existing quantities.
    // "remove" {...item, item.quanitity}   -- tracks that much less quantity deleting it if it drops below 1.
    // "clear" {...item}                    -- removes item entirely regardless of quantity
    // "empty"                              -- removes all cart entries 
    reducer: CartReducer,

    // Retrieve persistent copy, failing that initialize the default.
    load: GetInitialCart,

    // React Context for cart
    CTX: CartContext
};

export default CartContextAPI;