import React from "react";
import "./Advice.css"
import { useAdvice } from "./hook/useAdvice";
import RefreshButton from "../../shared/components/refresh-button/RefreshButton";

const Advice = () => {
    
    const [data, getNewAdvice] = useAdvice();
    
    return (
        <div className="Advice">
            <div>{!data.isLoading ? data.payload.text : "Loading..."}</div>
            
            <div>
                <RefreshButton isLoading={data.isLoading} click={getNewAdvice}></RefreshButton>
            </div>
        </div>
    );
}

export default Advice;