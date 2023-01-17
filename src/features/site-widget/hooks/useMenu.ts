import {useState} from "react";

export const useMenu = () => {
    const [show, setShow] = useState(false);

    return {
        show,
        setShow
    }
}
