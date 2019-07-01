import { useState, useEffect } from 'react';

export const useHttp = (url, method, body, headers, dependencies) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState({});

    useEffect( () => {
        setIsLoading(true);

        if(method === 'GET'){
            fetch(url, {
                method: method,
                headers: headers
            }).then( r => {
                if(!r.ok){
                    throw new Error('failed to fetch');
                }
                return r.json();
            }).then( d => {
                console.log(d)
                setIsLoading(false);
                setFetchedData(d);
            }).catch( e => {
                console.log(e);
                setIsLoading(false);
            })
        } else {
            fetch(url, {
                method: method,
                body: body,
                headers: headers
            }).then( r => {
                if(!r.ok){
                    throw new Error('failed to fetch');
                }
                return r.json();
            }).then( d => {
                console.log(d)
                setIsLoading(false);
                setFetchedData(d);
            }).catch( e => {
                console.log(e);
                setIsLoading(false);
            })
        }
    }, dependencies )
    return [isLoading, fetchedData];
}