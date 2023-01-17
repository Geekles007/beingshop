import React from 'react';

const useEffectOnChange = (callback: any, deps: any) => {
    const hasMounted = React.useRef(false);

    React.useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }
        callback();
    }, deps);

}

export default useEffectOnChange;