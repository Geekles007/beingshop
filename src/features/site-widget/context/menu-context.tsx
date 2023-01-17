import {createContext, PropsWithChildren, useContext} from "react";
import {MenuResponse} from "../models/MenuResponse";

export const MenuContext = createContext<MenuResponse<any> | null>(null);

interface MenuProviderProps<T> extends PropsWithChildren {
    value: MenuResponse<T>
}

export const MenuProvider = <T,>({children, value}: MenuProviderProps<T>) => {
    return <MenuContext.Provider value={value}>
        {children}
    </MenuContext.Provider>
}

export const useMenuContext = <T,>() => {
    const value = useContext<MenuResponse<T> | null>(MenuContext);
    if(value === null) throw new Error("Provider not found!");
    return value;
}
