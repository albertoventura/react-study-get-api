import { useEffect, useState } from "react"
import GetAdviceService from "../services/GetAdviceService";

const initialAdvice = {
    text: "",
    id: -1
}

export const useAdvice = () => {
    const [advice, setAdvice] = useState({payload: initialAdvice, isLoading: true});

    useEffect(()=>{
        console.log('####');
        GetAdviceService.get().then( result => {
            if(result){
                setAdvice(buildAdvice(result));
                //console.log('res', result.slip.advice);
            }
        });
    }, []);

    function buildAdvice(result){
        return {payload: {text: result.slip.advice, id: result.slip.id}, isLoading: false}
    }

    return advice;
}