import { ReactNode, SetStateAction, Dispatch } from "react";

export type ContextProviderProps = {
    children: ReactNode
}

export interface ProductContextType {
    product: string;
    setProduct: Dispatch<SetStateAction<string>>
}

export interface PracticeContextType {
    practice: string;
    setPractice: Dispatch<SetStateAction<string>>
}

export interface SettingsPageContextType {
    settings: boolean;
    setSettings: Dispatch<SetStateAction<boolean>>
}
