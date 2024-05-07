import { useState, createContext } from "react";

//Types
import { ProductContextType, SettingsPageContextType, ContextProviderProps } from "./context.type";

//Context
export const ProductContext = createContext<ProductContextType>({
    product: "",
    setProduct: () => { "" }
});

export const SettingsContext = createContext<SettingsPageContextType>({
    settings: false,
    setSettings: () => {false}
});

//Providers
export const ProductType = ({ children }: ContextProviderProps) => {
    const [product, setProduct] = useState("");
    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export const SettingsType = ({ children }: ContextProviderProps) => {
    const [settings, setSettings] = useState(false);
    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}