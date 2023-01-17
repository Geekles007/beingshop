import React, {ChangeEvent, memo} from "react";
import {useSearchContext} from "../context/search-context";

type SearchInputProps = {
    placeholder?: string;
    customRef: React.RefObject<HTMLInputElement>
}

const SearchInput = ({placeholder, customRef: resultRef}: SearchInputProps) => {
    const {setInput, setShow, input} = useSearchContext();

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target?.value;
        setInput(val);
    }

    const focusHandler = () => {
        if(input && input?.length > 0) {
            setShow(true);
        }
    }

    return <>
        <input ref={resultRef} type="text" placeholder={placeholder} onChange={changeHandler} onFocus={focusHandler} className={"border-none bg-transparent flex-1 outline-0 text-sm h-full text-gray-500"}/>
    </>

}

export default memo(SearchInput);
