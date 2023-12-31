'use client';

import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';

import { ILocation } from '@/app/hooks/useGeoLocation';
import getDis from '@/app/utils/getDis';

interface RecommendSwipeProps {
  title: string;
  imageSrc: string;
  isLogin: boolean;
  isScrap: boolean;
  keywordList: string;
  location: ILocation;
  latitude: string;
  longitude: string;
  onScrap: () => void;
  goInformation: () => void;
  onDeleteScrap: () => void;
}

const RecommendSwipe = ({
  title,
  imageSrc,
  isLogin,
  isScrap,
  keywordList,
  location,
  latitude,
  longitude,
  onScrap,
  goInformation,
  onDeleteScrap,
}: RecommendSwipeProps) => {
  return (
    <div className="shadow-3xl flex flex-col gap-2 rounded-lg bg-white p-4">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="사진"
          width={320}
          height={352}
          className="mb-2 mt-4 h-[22rem] w-[20rem] hover:cursor-pointer"
          onClick={goInformation}
        />
      )}
      <div className="flex justify-between gap-2">
        <p
          onClick={goInformation}
          className="cursor-pointer font-SBAggro text-3xl text-gray-900"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {isLogin && (
          <div>
            {!isScrap && (
              <AiOutlineHeart
                size={26}
                className="hover:cursor-pointer"
                onClick={onScrap}
              />
            )}
            {isScrap && (
              <AiFillHeart
                size={26}
                className="text-rose-500 hover:cursor-pointer"
                onClick={onDeleteScrap}
              />
            )}
          </div>
        )}
      </div>
      <div className="flex gap-2 text-sm font-medium text-gray-900">
        {keywordList && <p>{keywordList}</p>}
      </div>
      <div className="flex gap-1">
        <div className="mt-1 flex">
          <FaLocationDot size={20} className="text-rose-600" />
        </div>
        <p className="font-bold text-gray-900">
          {getDis(location, {
            latitude: Number(latitude),
            longitude: Number(longitude),
          })}
          km
        </p>
      </div>
    </div>
  );
};

export default RecommendSwipe;
