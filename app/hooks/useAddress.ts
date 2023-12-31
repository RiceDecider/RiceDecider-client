import { useState, useEffect } from 'react';

import { getAddress } from '@/app/services/address';
import { useGeoLocation } from './useGeoLocation';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600,
};

export const useAddress = () => {
  const { location, getLocation, error } = useGeoLocation(geolocationOptions);
  const [address, setAddress] = useState<any>(null);

  useEffect(() => {
    const fetchAddress = async () => {
      if (location.longitude !== 0 && location.latitude !== 0) {
        const result = await getAddress(location);
        // console.log(result);
        setAddress(result);
      }
    };

    // console.log(location);
    fetchAddress();
  }, [location]);

  return { location, address, getLocation, error };
};
