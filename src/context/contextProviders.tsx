import { useState, createContext } from "react";

//Types
import { ProductContextType, SettingsPageContextType, PracticeContextType, ContextProviderProps } from "./context.type";

//Context
export const ProductContext = createContext<ProductContextType>({
    product: "",
    setProduct: () => { "" }
});

export const PracticeContext = createContext<PracticeContextType>({
    practice: "",
    setPractice: () => { "" }
});

export const SettingsContext = createContext<SettingsPageContextType>({
    settings: false,
    setSettings: () => {false}
});

//Providers
export const ProductType = ({ children }: ContextProviderProps) => {
    const [product, setProduct] = useState("Default");
    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export const PracticeType = ({ children }: ContextProviderProps) => {
    const [practice, setPractice] = useState("Default");
    return (
        <PracticeContext.Provider value={{ practice, setPractice }}>
            {children}
        </PracticeContext.Provider>
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