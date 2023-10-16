import axios from 'axios';
import { useState, useCallback } from 'react';

const useFindMyHome = () => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const findMyHome = useCallback(async (info) => {
    const { location, ...requestInfo } = info;

    setIsLoading(true);

    try {
      const response = await axios.post('/whereismyneighborhood', requestInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setResult(response.data);
      return response;
    } catch (error) {
      console.info('error: ', error);
      return error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    result,
    setResult,
    isLoading,
    findMyHome
  };
};

export default useFindMyHome;
