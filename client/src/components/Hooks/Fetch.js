import { useState, useEffect } from 'react';

export const useHttp = (url, method, body, headers, dependencies) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState({});

    useEffect( () => {
        setIsLoading(true);
        fetch(url, {
            method: method,
            // body,
            headers: headers
        }).then( r => {
            if(!r.ok){
                throw new Error('failed to fetch');
            }
            return r.json();
        }).then( d => {
            console.log(d)
            setIsLoading(false);
            setFetchedData(d[0]);
        }).catch( e => {
            console.log(e);
            setIsLoading(false);
        })
    }, [] )
    return [isLoading, fetchedData];
}