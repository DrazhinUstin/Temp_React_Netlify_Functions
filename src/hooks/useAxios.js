import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const { data } = await axios.get(url);
                setData(data);
                setIsError(false);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        getData();
    }, [url]);

    return { isLoading, isError, data };
};

export default useAxios;
