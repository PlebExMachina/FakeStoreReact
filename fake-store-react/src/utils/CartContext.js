import { createContext } from 'react'
import { hasItem, modItem, appendItem, removeItem, noChange } from './ReducerHelpers'

export const GetInitialCart = () => {
    const TryItem = localStorage.getItem("Cart");
    return TryItem ? JSON.parse(TryItem) : {
        items: [],
    }
}

export const SaveCart = (cart) => {
    localStorage.setItem("Cart", JSON.stringify(cart));
}

const CartContext = createContext(GetInitialCart())

export function CartReducer(state, action) {
    const idMatch = (el) => el.id === action.payload.id;
    const foundItem = () => state.items.find(idMatch);

    const incItem = () => state.items
                                .map(el => idMatch(el) ? {...el, quantity: el.quantity + 1} : el);
    
    // Also sorts by price. This is the only place where the isSorted invariant may be invalidated so it's only needed here.
    const appendItem = () => [...state.items, {...action.payload, quantity: 1}].sort((a,b) => b.price - a.price);

    const removeItem = () => state.items
                                .filter(el => !idMatch(el) || el.quantity > 1)
                                .map(el => idMatch(el) ? {...el, quantity: el.quantity - 1} : el);

    const AddAction = () => foundItem() ? incItem() : appendItem();
    const RemoveAction = () => foundItem() ? removeItem() : {...state.items}

    switch (action.type) {
        case 'add': return {...state, items: AddAction().sort()};
        case 'remove': return {...state, items: RemoveAction()};
        default:
            // log error silently
            console.log("Reducer Action Invalid");
            return {...state}
    }
}

export default CartContext;