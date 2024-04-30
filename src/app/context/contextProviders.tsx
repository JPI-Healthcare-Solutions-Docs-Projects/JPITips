import { useState, createContext } from "react";

//Types
import { ProductContextType, ContextProviderProps } from "./context.type";

//Context
export const ProductContext = createContext<ProductContextType>({
    product: "",
    setProduct: () => {""}
});

//Providers
export const ProductType = ( { children }: ContextProviderProps ) => {
    const [ product, setProduct ] = useState("");
    return(
        <ProductContext.Provider value={{product, setProduct}}>
            { children }
        </ProductContext.Provider>
    )
}