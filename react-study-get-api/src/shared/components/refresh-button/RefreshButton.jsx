import React from "react";
import "./RefreshButton.css";
import RefreshIcon from "../refresh-icon/RefreshIcon";

const RefreshButton = props => {

    const isLoading = props.isLoading ? "isDisabled" : "";
    return (
        <button className={`RefreshButton ${isLoading}`} disabled={props.isLoading} onClick={e => props.click()}>
            <RefreshIcon isLoading={props.isLoading}/>
        </button>
    );
}

export default RefreshButton;