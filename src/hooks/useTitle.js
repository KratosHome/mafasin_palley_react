import React, { useEffect, useRef, useState } from "react";


export const useTitle = (name, img) => {
  
  useEffect(() => {
    let isCancelled = false
    const titleChange = async () =>  {
      if(!isCancelled){
        document.title = name;
        document.head.getElementsByTagName("link")[0].href =
        "http://localhost:3000/favicon.ico";
      }
    } 
    titleChange()
    return() =>{
      isCancelled = true
    }
  }, [name]);
}
