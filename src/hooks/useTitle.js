import React, { useEffect, useRef, useState } from "react";


export const useTitle = (name) => {
 return document.title = name
}
