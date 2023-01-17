import {useCallback, useEffect, useState} from "react";

export const useSearch = () => {
    const [input, setInput] = useState<string>("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(input?.length > 0);
    }, [input])

    const textHandler = useCallback((value: string) => {
        setInput(value);
    }, [input])

    return {
        input,
        setInput: textHandler,
        show,
        setShow
    }
}
