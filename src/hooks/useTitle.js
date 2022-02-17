import React, { useEffect } from "react";

export const useTitle=(name, img)=>{
    useEffect(() => {
        document.title = name;
      }, []);
    
      useEffect(() => {
        document.head.getElementsByTagName("link")[0].href =
          "http://localhost:3000/favicon.ico";
      }, []);
}