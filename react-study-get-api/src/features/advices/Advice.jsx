import React from "react";
import "./Advice.css"
import { useAdvice } from "./hook/useAdvice";

const Advice = () => {
    
    const data = useAdvice();
    
    return (
        <div className="Advice">
            <div>{!data.isLoading ? data.payload.text : "Loading..."}</div>
        </div>
    );
}

export default Advice;