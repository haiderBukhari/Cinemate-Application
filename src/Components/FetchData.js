import {useEffect, useCallback } from 'react';

export const FetchData = ({url, setdata, setlength}) => {
    const fetchdata = useCallback(async ()=>{
        try{
            const response = await fetch(url);
            if(!response.ok){throw new Error("Something Unexpected Happened")}
            let data = await response.json();
            setdata(data.results);
            // console.log(data.results);
            console.log(`Fetching....... ${url}`)
        }
        catch(err){console.log(err)}
    },[])
    useEffect(()=>{
        fetchdata();
    }, [url])
}
