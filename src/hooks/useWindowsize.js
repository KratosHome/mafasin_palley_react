import React, {useEffect, useState} from "react";

const useWindowSize = ()=> {
    const getWindowSize = ()=> ({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const [windowSize, setWindowSize] = useState(getWindowSize);

    useEffect(()=>{
        const handel = ()=> setWindowSize(getWindowSize)

        window.addEventListener("resize", handel)

        return ()=> window.removeEventListener("resize", handel)
    },[])

    return windowSize
}

export default useWindowSize