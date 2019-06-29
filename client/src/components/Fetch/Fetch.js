import React, { useState, useEffect } from 'react';

export const useHttp = (url, method, headers, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect( () => {
        setIsLoading(true);
        fetch(url, method, body, headers)
        .then( r => {
            if(!r.ok){
                throw new Error('failed to fetch');
            }
            return r.json();
        }).then( d => {
            setIsLoading(false);
            setFetchedData(d);
        }).catch( e => {
            console.log(e);
            setIsLoading(false);
        })
    }, dependencies )
    return [isLoading, fetchedData];
}