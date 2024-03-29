'use client';

import Title from '@/app/components/Title';
import useSwipeStore from '@/app/store/swipe';

const RecommendTitle = () => {
  const { isSwipe } = useSwipeStore();

  return (
    <>
      {isSwipe && (
        <div className="flex w-full p-6">
          <Title
            title="이 식당은 어떠신가요?"
            titleClassName="text-white"
            content="사진을 클릭하면 상세 정보를 확인할 수 있어요."
            contentClassName="text-white"
          />
        </div>
      )}
      {!isSwipe && <div className="p-3" />}
    </>
  );
};

export default RecommendTitle;
