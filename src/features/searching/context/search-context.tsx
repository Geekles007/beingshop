import {createContext, PropsWithChildren, useContext} from "react";
import {TResponse} from "../models/TResponse";

export const SearchContext = createContext<TResponse<any> | null>(null);

interface SearchProviderProps<T> extends PropsWithChildren {
    value: TResponse<T>
}

export const SearchProvider = <T,>({children, value}: SearchProviderProps<T>) => {
    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
}

export const useSearchContext = <T,>() => {
    const value = useContext<TResponse<T> | null>(SearchContext);
    if(value === null) throw new Error("Provider not found!");
    return value;
}
