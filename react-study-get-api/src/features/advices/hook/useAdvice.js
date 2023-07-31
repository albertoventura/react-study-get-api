import { useEffect, useState } from "react"
import GetAdviceService from "../services/GetAdviceService";

const initialAdvice = {
    text: "",
    id: -1
}

export const useAdvice = () => {
    const [data, setData] = useState({payload: initialAdvice, isLoading: true});

    useEffect(()=>{
        console.log('####');
        getNewAdvice();
    }, []);

    function buildAdvice(result){
        return {payload: {text: result.slip.advice, id: result.slip.id}, isLoading: false}
    }

    function getNewAdvice(){
        setData({...data, isLoading: true})
        GetAdviceService.get().then( result => {
            if(result){
                setData(buildAdvice(result));
                //console.log('res', result.slip.advice);
            }
        });
    }

    return [data, getNewAdvice];
}