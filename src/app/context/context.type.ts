import { ReactNode, SetStateAction, Dispatch } from "react";

export interface ProductContextType {
    product: string;
    setProduct: Dispatch<SetStateAction<string>>
}

export type ContextProviderProps = {
    children: ReactNode
}