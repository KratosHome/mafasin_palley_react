import React, { useEffect, useState } from "react";
import Iscroll from "./iScroll"
import useWindowSize from "./useWindowsize";

const useSkroll = (callBack:(scrollDate: Iscroll) => void) => {
    const scrollDate = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0,
        differnce: 0,
        acceleration: 0,
        velocity: 0,
        skew: 0,
    } 

    const { height } = useWindowSize()

    const scroll = () => {
        scrollDate.current = window.scrollY;
        scrollDate.previous += (scrollDate.current - scrollDate.previous) * scrollDate.ease;
        scrollDate.rounded = Math.round(scrollDate.previous * 100) / 100;
        scrollDate.differnce = scrollDate.current - scrollDate.rounded;
        scrollDate.acceleration = scrollDate.differnce / height;
        scrollDate.velocity += scrollDate.acceleration;
        scrollDate.skew = scrollDate.velocity * 7.5;
        callBack(scrollDate);
    }

    useEffect(() => {
        requestAnimationFrame(() => scroll())
    }, [])
}

export default useSkroll