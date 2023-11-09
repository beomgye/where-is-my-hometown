import axios, { AxiosResponse } from 'axios';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface HometownProps {
  isKBApi: number;
  property: number;
  location: string;
  neighborhoodCode: string;
  transactionType: number;
  buildingType: number;
  recommendedNumber: number;
}

interface UseFindMyHomeProps {
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  findMyHome: (info: HometownProps) => Promise<AxiosResponse<string>>;
}

const useFindMyHome = (): UseFindMyHomeProps => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const findMyHome = useCallback(async (info: HometownProps) => {
    const { ...requestInfo } = info;

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
      alert(`error: ${error}`);
      return error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    result,
    setResult,
    isLoading,
    setIsLoading,
    findMyHome
  };
};

export default useFindMyHome;
