import axios from 'axios';
import { useState, useCallback } from 'react';

const useFindMyHome = () => {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('');
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
      setStatus(response.status);
    } catch (e) {
      console.info('e: ', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    result,
    status,
    isLoading,
    findMyHome
  };
};

export default useFindMyHome;
