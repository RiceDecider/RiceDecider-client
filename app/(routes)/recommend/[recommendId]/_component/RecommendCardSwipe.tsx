'use client';

import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { ILocation } from '@/app/hooks/useGeoLocation';
import { deleteScrap, postScrap } from '@/app/services/scrap';
import deleteToken from '@/app/utils/deleteToken';
import cleanTitle from '@/app/utils/cleanTitle';
import useScrapStore from '@/app/store/scrap';
import RecommendSwipe from './RecommendSwipe';
import RecommendCard from './RecommendCard';

interface RecommnedCardSwipeProps {
  swipe: boolean;
  imageSrc?: string;
  isImageLoading: boolean;
  title: string;
  keywordList: string;
  address: string;
  roadAddress: string;
  latitude?: string;
  longitude?: string;
  location: ILocation;
  isLogin: boolean;
}

const RecommendCardSwipe = ({
  swipe,
  imageSrc,
  isImageLoading,
  title,
  keywordList,
  address,
  roadAddress,
  latitude,
  longitude,
  location,
  isLogin,
}: RecommnedCardSwipeProps) => {
  const [isScrap, setIsScrap] = useState(false);
  const router = useRouter();
  const token = getCookie('access_token');
  const param = useParams();
  const scrapStore = useScrapStore();
  const { scrapAddressData } = scrapStore;

  const [addressName, categoryName] = decodeURI(
    param.recommendId as string,
  ).split(' ');

  const goInformation = () => {
    router.push(
      `/information/${addressName}&${cleanTitle(title)}&${categoryName}`,
    );
  };

  useEffect(() => {
    if (scrapAddressData.length !== 0) {
      if (scrapAddressData.includes(address)) return setIsScrap(true);
      setIsScrap(false);
    }
  }, [address, scrapAddressData]);

  const onScrap = async () => {
    const response = await postScrap({
      scrap: {
        category: categoryName,
        realCategory: categoryName,
        title,
        ttwwfew: title,
        detailURL: `https://map.naver.com/p/search/${cleanTitle}`,
        address,
        radAddress: roadAddress,
      },
      access_token: token as string,
    });

    if (response.length !== 0) {
      toast('스크랩 되었습니다!');
      scrapStore.addScrapAddressData(address);
      setIsScrap(true);
      return;
    }

    deleteToken();
    router.refresh();
    return toast('스크랩 실패...');
  };

  const onDeleteScrap = async () => {
    const response = await deleteScrap({
      address,
      access_token: token as string,
    });

    if (response.length !== 0) {
      toast('스크랩이 취소되었습니다!');
      scrapStore.setScrapAddressData(
        scrapAddressData.filter(thisAddress => thisAddress !== address),
      );
      setIsScrap(false);
      return;
    }

    deleteToken();
    router.refresh();
    return toast('스크랩 취소실패...');
  };

  return (
    <>
      {swipe && (
        <RecommendSwipe
          title={title}
          imageSrc={imageSrc}
          isImageLoading={isImageLoading}
          isLogin={isLogin}
          isScrap={isScrap}
          keywordList={keywordList}
          location={location}
          latitude={latitude}
          longitude={longitude}
          onScrap={onScrap}
          goInformation={goInformation}
          onDeleteScrap={onDeleteScrap}
        />
      )}

      {!swipe && (
        <RecommendCard
          title={title}
          imageSrc={imageSrc}
          isImageLoading={isImageLoading}
          isLogin={isLogin}
          isScrap={isScrap}
          keywordList={keywordList}
          location={location}
          latitude={latitude}
          longitude={longitude}
          onScrap={onScrap}
          goInformation={goInformation}
          onDeleteScrap={onDeleteScrap}
        />
      )}
    </>
  );
};

export default RecommendCardSwipe;
