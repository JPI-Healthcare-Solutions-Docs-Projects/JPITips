import { useState, createContext } from "react";

//Types
import { ProductContextType, ContextProviderProps } from "./context.type";

//Context
export const ProductTypeContext = createContext<ProductContextType>({
    product: "",
    setProduct: () => {""}
});

//Providers
export const ProductType = ( { children }: ContextProviderProps ) => {
    const [ product, setProduct ] = useState("");
    return(
        <ProductTypeContext.Provider value={{product, setProduct}}>
            { children }
        </ProductTypeContext.Provider>
    )
}