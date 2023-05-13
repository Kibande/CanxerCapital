function matchMediaQuery(breakPoints,setBreakPoint){
    for(var key of Object.keys(breakPoints)){
        if(window.matchMedia(`${breakPoints[key]}`).matches){
            setBreakPoint(key);
        }
    }
}

export function breakPointObserver(breakPoints,setBreakPoint){
    matchMediaQuery(breakPoints,setBreakPoint);
    window.addEventListener("resize",()=>{
        matchMediaQuery(breakPoints,setBreakPoint);
    });
}

