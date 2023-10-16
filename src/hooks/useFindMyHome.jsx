import axios from 'axios';
import { useState, useCallback } from 'react';

const useFindMyHome = () => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-shadow
  const findMyHome = useCallback(async (info) => {
    setIsLoading(true);
    try {
      const response = axios.post('/whereismyneighborhood', info);
      setResult(response.data);
    } catch (e) {
      console.info('e: ', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    result,
    isLoading,
    findMyHome
  };
};

export default useFindMyHome;
