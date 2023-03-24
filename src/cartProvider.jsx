import { createContext, useContext, useState} from "react"

// Creation du context du panier
const CartContext = createContext({})

// hook custom pour récupérer ce qui est dans le context
export function useCartContext(){
    return useContext(CartContext) 
}

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    function addToCart(product, quantity){
        const productAndQuantity = {...product, quantity};

        setCart(productAndQuantity)
    }

    function removeProductFromCart(){
        setCart({})
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeProductFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
    